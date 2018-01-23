import {BrowserTypes} from "./browser-types";
import {IBrowserManager} from "./browser-manager";

export interface IManagerFactory {
    (browser: BrowserTypes): IBrowserManager;
};
