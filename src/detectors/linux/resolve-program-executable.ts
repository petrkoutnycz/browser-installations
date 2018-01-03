import {exec} from "child_process";

/**
 * Function for resolving program executable path
 * @param {string} program Program name to be resolved
 * @returns {string} Returns a string containing the path to a program
 */
export const resolveProgramExecutable = (program: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const cmd = `which ${program}`;
        exec(cmd, (err, stdout, stderr) => {
            if (stdout) {
                const trimmed = stdout.trim();
                resolve(trimmed);
            } else if (err) {
                reject(`Error occured during getting a program executable path: ${err}`);
            }
        });
    });
};
