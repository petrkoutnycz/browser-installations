
import {isUndefined} from "lodash";

export interface IVersion {
    major: number;
    minor: number;
    patch: number;
    build?: number;
};

/**
 * Structure representing a version number
 */
export class Version implements IVersion {
    public readonly major: number;
    public readonly minor: number;
    public readonly patch: number;
    public readonly build: number;

    constructor(major: number, minor?: number, patch?: number, build?: number) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
        this.build = build;
    }

    public static parse(version: string): Version {
        if (typeof version !== "string") {
            return undefined;
        }

        const re = /(?:^|\s+)(\d+)\.(\d+)\.(\d+)(?:\.(\d+))?(?:$|\s+)/.exec(version);
        if (!re) {
            return undefined;
        }

        let build: number = undefined;

        if (!isUndefined(re[4])) {
            build = parseInt(re[4], 10);
        }

        const major = parseInt(re[1], 10);
        const minor = parseInt(re[2], 10);
        const patch = parseInt(re[3], 10);

        return new Version(major, minor, patch, build);
    };
};
