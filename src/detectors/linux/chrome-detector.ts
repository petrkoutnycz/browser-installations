import {LinuxDetectorBase} from "./detector-base";

export class LinuxChromeDetector extends LinuxDetectorBase {
    constructor() {
        super();
    }

    protected get program(): string {
        return "google-chrome-stable";
    }
};
