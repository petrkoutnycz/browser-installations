import {exec} from "child_process";

export class PowershellFileversionResolver {
    getFileVersion(pth: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const cmd = "powershell -Command (Get-Item '${pth}').VersionInfo.FileVersion";
            exec(cmd, (err, stdout, stderr) => {
                if (stdout) {
                    resolve(stdout);
                } else if (err) {
                    reject(`Error occured during getting a file version: ${err}`);
                }
            });
        });
    };
};
