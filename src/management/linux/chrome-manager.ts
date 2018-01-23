import {IBrowserManager} from "../../api";
import {assetPath, bashFileCall} from "../../helpers";

export class LinuxChromeManager implements IBrowserManager {
    private get bashFile(): string {
        return assetPath("linux-chrome-updates.ps1");
    };

    public setUpdates = (enable: boolean): Promise<void> => {
        return bashFileCall(this.bashFile, enable ? "1" : "0")
            .then(() => {})
            .catch(err => {
                throw new Error(`Error occured during setting updates\n${err}`);
            });
    };
};
