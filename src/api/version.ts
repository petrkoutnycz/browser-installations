
import {isUndefined} from "lodash";

export interface IVersion {
    major: number;
    minor?: number;
    patch?: number;
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

        const re = /^(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:\.(\d+))?$/.exec(version);
        if (!re) {
            return undefined;
        }

        let major: number = undefined, minor: number = undefined, patch: number = undefined, build: number = undefined;
        if (!isUndefined(re[4])) {
            build = parseInt(re[4], 10);
        }
        if (!isUndefined(re[3])) {
            patch = parseInt(re[3], 10);
        }
        if (!isUndefined(re[2])) {
            minor = parseInt(re[2], 10);
        }

        major = parseInt(re[1], 10);

        return new Version(major, minor, patch, build);
    };
};
