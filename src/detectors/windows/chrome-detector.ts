import {WindowsDetectorBase} from "./detector-base";

export const EXECUTABLE_NAME = "chrome.exe";

export class WindowsChromeDetector extends WindowsDetectorBase {
    protected executable = EXECUTABLE_NAME;
};
