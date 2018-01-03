import {LinuxDetectorBase} from "./detector-base";

export class LinuxFirefoxDetector extends LinuxDetectorBase {
    constructor() {
        super();
    }

    protected get program(): string {
        return "firefox";
    }
};
