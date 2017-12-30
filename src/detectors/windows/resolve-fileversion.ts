import {exec} from "child_process";

/**
 * Function for resolving file version via Powershell command
 * @param {string} pth Path of a file to be resolved
 */
export const resolveFileVersion = (pth: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const cmd = `powershell -Command (Get-Item '${pth}').VersionInfo.FileVersion`;
        exec(cmd, (err, stdout, stderr) => {
            if (stdout) {
                const trimmed = stdout.trim();
                resolve(trimmed);
            } else if (err) {
                reject(`Error occured during getting a file version: ${err}`);
            }
        });
    });
};
