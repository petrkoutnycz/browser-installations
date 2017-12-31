import * as path from "path";
import {WindowsDetectorBase} from "./detector-base";

export const EXECUTABLE_NAME = "chrome.exe";

export class WindowsChromeDetector extends WindowsDetectorBase {
    protected getExecutablePaths(): string[] {
        const paths: string[] = [];

        if (this.programFilesX86Path) {
            paths.push(path.join(this.programFilesX86Path, "Google", "Chrome", "Application", EXECUTABLE_NAME));
        }

        if (this.programFilesX64Path) {
            paths.push(path.join(this.programFilesX64Path, "Google", "Chrome", "Application", EXECUTABLE_NAME));
        }

        return paths;
    };
};
