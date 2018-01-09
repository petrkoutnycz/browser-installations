import {IBrowserManager} from "../../api";
import {stopService} from "./service-management";

export const UPDATE_SERVICES = ["gupdate", "gupdatem"];

export class WindowsChromeManager implements IBrowserManager {
    public disableUpdates = (): Promise<void> => {
        // todo:
        return undefined;
    };
};
