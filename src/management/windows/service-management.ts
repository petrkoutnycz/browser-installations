import {exec} from "child_process";

export const stopService = (name: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        const cmd = `powershell -Command (Stop-Service '${name}')`;
        exec(cmd, (err, stdout, stderr) => {
            if (!err) {
                resolve();
            } else {
                reject(`Error occured during stopping a Windows service: ${err}`);
            }
        });
    });
};
