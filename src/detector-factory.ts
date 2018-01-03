import * as os from "os";
import {BrowserTypes, IDetectorFactory, IDetector} from "./api";
import {WindowsChromeDetector, LinuxChromeDetector, LinuxFirefoxDetector} from "./detectors";

export class DetectorFactory implements IDetectorFactory {
    public create = (browser: BrowserTypes): IDetector => {
        const platform = os.platform();

        if (platform === "win32") {
            return this.createWindowsDetector(browser);
        } else if (platform === "linux") {
            return this.createLinuxDetector(browser);
        }

        throw new Error("Browser detection is supported only for win32 and linux environment.");
    };

    private createWindowsDetector(browser: BrowserTypes): IDetector {
        switch (browser) {
            case "chrome": return new WindowsChromeDetector();
            default:
                throw new Error("Windows browser detection is supported only for chrome.");
        }
    };

    private createLinuxDetector(browser: BrowserTypes): IDetector {
        switch (browser) {
            case "chrome": return new LinuxChromeDetector();
            case "firefox": return new LinuxFirefoxDetector();
            default:
                throw new Error("Linux browser detection is supported only for chrome and firefox.");
        }
    };
};
