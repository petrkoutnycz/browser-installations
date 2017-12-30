import {exists} from "fs";
import * as path from "path";
import {IDetector, IBrowserMetadata} from "../../api";
import {PowershellFileversionResolver} from "./powershell-fileversion-resolver";

export const EXECUTABLE_NAME = "chrome.exe";

export class WindowsChromeDetector implements IDetector {
    public detect(): Promise<IBrowserMetadata> {
        return new Promise<IBrowserMetadata>((resolve, reject) => {
            let programFiles = process.env["ProgramFiles(x86)"];
            if (programFiles) {
                const pth = path.join(programFiles, EXECUTABLE_NAME);
                exists(pth, result => {
                    
                });
            }
        });
        // ProgramFiles: 'C:\\Program Files',
        // 'ProgramFiles(x86)': 'C:\\Program Files (x86)',
        return undefined;
    };
};
