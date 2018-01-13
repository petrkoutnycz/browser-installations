import {exec} from "child_process";
import * as path from "path";
import * as _ from "lodash";

const serializeArgs = (args: { [arg: string]: any }): string => {
    if (!args || typeof args !== "object") {
        return "";
    }

    const paramsWithValues: string[] = [];

    for (let key in args) {
        paramsWithValues.push(`-${key}`);
        paramsWithValues.push(args[key]);
    }

    return paramsWithValues.join(" ");
};

export const powershellFileCall = (fileName: string, args: { [arg: string]: any }, verbose = false): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const file = path.isAbsolute(fileName) ? fileName : path.resolve(fileName);
        const argsStr = serializeArgs(args);
        const cmd = `powershell -Command "${file}" ${argsStr}`;

        if (verbose) {
            console.log(`Calling powershell command: ${cmd}`);
        }

        exec(cmd, (err, stdout, stderr) => {
            if (!err) {
                if (verbose) {
                    console.log(`Powershell call with result:\n${stdout}`);
                }

                resolve(stdout);
            } else {
                reject(`Error occured during calling a powershell file: ${err}`);
            }
        });
    });
};
