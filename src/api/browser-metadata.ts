import {Version} from "./version";

export interface IBrowserMetadata {
    executable: string;
    version: string;
    versionObj?: Version;
};

export class BrowserMetadata implements IBrowserMetadata {
    public readonly executable: string;
    public readonly version: string;
    public readonly versionObj: Version;

    constructor(executable: string, version: string | Version) {
        this.executable = executable;

        if (version instanceof Version) {
            this.version = version.toString();
            this.versionObj = version;
        } else if (typeof version === "string") {
            this.version = version;
            this.versionObj = Version.parse(version);
        }
    }
};
