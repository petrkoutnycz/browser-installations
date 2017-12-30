import {IBrowserMetadata} from "./browser-metadata";

export interface IDetector {
    detect: () => Promise<IBrowserMetadata>;
};
