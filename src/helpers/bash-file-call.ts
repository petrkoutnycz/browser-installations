import {exec} from "child_process";
import * as path from "path";
import * as _ from "lodash";

export const bashFileCall = (fileName: string, ...args: string[]): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const file = path.isAbsolute(fileName) ? fileName : path.resolve(fileName);
        const argsStr = (args || []).join(" ");
        const cmd = `bash "${file}" ${argsStr}`;

        exec(cmd, (err, stdout, stderr) => {
            if (!stderr) {
                resolve(stdout);
            } else {
                reject(stderr);
            }
        });
    });
};
