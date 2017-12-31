import {exists} from "fs";
import * as path from "path";
import {IDetector, IBrowserMetadata, BrowserMetadata} from "../../api";
import {resolveFileVersion} from "./resolve-fileversion";

export const ENV_PROGRAM_FILES_x86 = "ProgramFiles(x86)"
export const ENV_PROGRAM_FILES_x64 = "ProgramFiles"

export abstract class WindowsDetectorBase implements IDetector {
    /**
     * Gets a path to program files folder (x86)
     */
    protected get programFilesX86Path(): string {
        return process.env[ENV_PROGRAM_FILES_x86];
    }

    /**
     * Gets a path to program files folder (x64)
     */
    protected get programFilesX64Path(): string {
        return process.env[ENV_PROGRAM_FILES_x64];
    }

    /**
     * Gets an array of possible paths to an executable
     */
    protected abstract getExecutablePaths(): string[];

    public async detect(): Promise<IBrowserMetadata> {
        const paths = this.getExecutablePaths();

        for (let pth of paths) {
            const fileVersion = await this.getFileVersionIfExists(pth);

            if (fileVersion) {
                return new BrowserMetadata(path.basename(pth), fileVersion);
            }
        }
        return undefined;
    };

    private getFileVersionIfExists(pth: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            exists(pth, existsBool => {
                if (!existsBool) {
                    resolve(undefined);
                    return;
                }

                resolveFileVersion(pth)
                    .then(fileVersion => {
                        resolve(fileVersion);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        });
    };
};
