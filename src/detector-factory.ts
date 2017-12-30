import * as os from "os";
import {BrowserTypes, IDetectorFactory, IDetector} from "./api";
import {WindowsChromeDetector} from "./detectors";

export class DetectorFactory implements IDetectorFactory {
    public create(browser: BrowserTypes): IDetector {
        if (os.platform() === "win32") {
            return this.createWindowsDetector(browser);
        }

        return undefined;
    };

    private createWindowsDetector(browser: BrowserTypes): IDetector {
        if (browser === "chrome") {
            return new WindowsChromeDetector();
        }

        return undefined;
    };
};
