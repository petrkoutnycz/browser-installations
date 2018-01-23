import * as os from "os";
import {BrowserTypes, IDetector, IDetectorFactory} from "./api";
import {WindowsChromeDetector, LinuxChromeDetector, LinuxFirefoxDetector} from "./detectors";

export const detectorFactory: IDetectorFactory = (browser: BrowserTypes): IDetector => {
    const platform = os.platform();

    if (platform === "win32") {
        return createWindowsDetector(browser);
    } else if (platform === "linux") {
        return createLinuxDetector(browser);
    }

    throw new Error("Browser detection is supported only for win32 and linux environment.");
};

const createWindowsDetector = (browser: BrowserTypes): IDetector => {
    switch (browser) {
        case "chrome": return new WindowsChromeDetector();
        default:
            throw new Error("Windows browser detection is supported only for chrome.");
    }
};

const createLinuxDetector = (browser: BrowserTypes): IDetector => {
    switch (browser) {
        case "chrome": return new LinuxChromeDetector();
        case "firefox": return new LinuxFirefoxDetector();
        default:
            throw new Error("Linux browser detection is supported only for chrome and firefox.");
    }
};
