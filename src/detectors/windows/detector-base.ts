import {exists} from "fs";
import * as path from "path";
import {IDetector, IBrowserMetadata} from "../../api";
import {resolveFileVersion} from "./resolve-fileversion";

export const ENV_PROGRAM_FILES_x86 = "ProgramFiles(x86)"
export const ENV_PROGRAM_FILES_x64 = "ProgramFiles"

export abstract class WindowsDetectorBase implements IDetector {
    /**
     * Name of an executable file
     * @example chrome.exe
     */
    protected abstract get executable(): string;

    public async detect(): Promise<IBrowserMetadata> {
        const x86path = path.join(process.env[ENV_PROGRAM_FILES_x86], "Google", "Chrome", "Application", this.executable);
        const x86fileVersion = await this.getFileVersionIfExists(x86path);
        if (x86fileVersion)  {
            return {
                executable: this.executable,
                version: x86fileVersion
            };
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
