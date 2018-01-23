import {BrowserTypes} from "./browser-types";
import {IDetector} from "./detector";

export interface IDetectorFactory {
    (browser: BrowserTypes): IDetector;
};
