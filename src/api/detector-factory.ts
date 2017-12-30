import {BrowserTypes} from "./browser-types";
import {IDetector} from "./detector";

export interface IDetectorFactory {
    create: (browser: BrowserTypes) => IDetector;
};
