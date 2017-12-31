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

    constructor(executable: string, version: string) {
        this.executable = executable;
        this.version = version;
        this.versionObj = Version.parse(version);
    }
};
