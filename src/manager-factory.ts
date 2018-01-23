import * as os from "os";
import {BrowserTypes, IBrowserManager, IManagerFactory} from "./api";
import {WindowsChromeManager, LinuxChromeManager} from "./management";

export const managerFactory: IManagerFactory = (browser: BrowserTypes): IBrowserManager => {
    const platform = os.platform();

    if (platform === "win32") {
        return createWindowsManager(browser);
    } else if (platform === "linux") {
        return createLinuxManager(browser);
    }

    throw new Error("Browser management is supported only for win32 and linux environment.");
};

const createWindowsManager = (browser: BrowserTypes): IBrowserManager => {
    switch (browser) {
        case "chrome": return new WindowsChromeManager();
        default:
            throw new Error("Windows browser management is supported only for chrome.");
    }
};

const createLinuxManager = (browser: BrowserTypes): IBrowserManager => {
    switch (browser) {
        case "chrome": return new LinuxChromeManager();
        default:
            throw new Error("Linux browser management is supported only for chrome.");
    }
};
