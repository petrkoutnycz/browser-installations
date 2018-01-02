
import {isUndefined} from "lodash";

export interface IVersion {
    major: number;
    minor: number;
    patch: number;
    build?: number;
};

export const REGEXP_EXACT = /^(\d+)\.(\d+)\.(\d+)(?:\.(\d+))?$/;
export const REGEXP_CONTAINING = /(\d+)\.(\d+)\.(\d+)(?:\.(\d+))?/;

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
        return this.parseInternal(REGEXP_EXACT, version);
    };

    public static findFirst(version: string): Version {
        return this.parseInternal(REGEXP_CONTAINING, version);
    };

    public static parseInternal(regexp: RegExp, version: string): Version {
        if (typeof version !== "string") {
            return undefined;
        }

        const match = regexp.exec(version);
        if (!match) {
            return undefined;
        }

        let build: number = undefined;

        if (!isUndefined(match[4])) {
            build = parseInt(match[4], 10);
        }

        const major = parseInt(match[1], 10);
        const minor = parseInt(match[2], 10);
        const patch = parseInt(match[3], 10);

        return new Version(major, minor, patch, build);
    };
};
