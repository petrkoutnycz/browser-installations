import {exec} from "child_process";

/**
 * Function for resolving program version
 * @param {string} program Program name to be resolved
 * @returns {string} Returns a string containing a version number
 */
export const resolveProgramVersion = (program: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const cmd = `${program} --version`;
        exec(cmd, (err, stdout, stderr) => {
            if (stdout) {
                const trimmed = stdout.trim();
                resolve(trimmed);
            } else if (err) {
                reject(`Error occured during getting a program version: ${err}`);
            }
        });
    });
};
