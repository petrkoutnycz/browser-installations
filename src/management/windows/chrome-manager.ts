import {IBrowserManager} from "../../api";
import {assetPath, powershellFileCall} from "../../helpers";

export class WindowsChromeManager implements IBrowserManager {
    private get powershellFile(): string {
        return assetPath("windows-chrome-updates.ps1");
    };

    public setUpdates = (enable: boolean): Promise<void> => {
        return powershellFileCall(this.powershellFile, {
                "enable": enable
            })
            .then(() => {})
            .catch(err => {
                throw new Error(`Error occured during setting updates\n${err}`);
            });
    };
};
