import {exec} from "child_process";
import * as path from "path";
import * as _ from "lodash";

export const powershellFileCall = (fileName: string, args: any, verbose = false): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const file = path.isAbsolute(fileName) ? fileName : path.resolve(fileName);
        let argsStr = "";

        if (args) {
            const arr: string[] = [];
            for (let key in args) {
                arr.push(`-${key}`);
                arr.push(args[key]);
            }
            argsStr = arr.join(" ");
        }

        const cmd = `powershell -Command "${file}" ${argsStr}`;

        if (verbose) {
            console.log(`Calling powershell command: ${cmd}`);
        }

        exec(cmd, (err, stdout, stderr) => {
            if (!err) {
                resolve(stdout);
            } else {
                reject(`Error occured during calling a powershell file: ${err}`);
            }
        });
    });
};
