import {IDetector, IBrowserMetadata, BrowserMetadata, Version} from "../../api";
import {resolveProgramVersion} from "./resolve-program-version";
import {resolveProgramExecutable} from "./resolve-program-executable";

export abstract class LinuxDetectorBase implements IDetector {
    /**
     * Gets a program name
     */
    protected abstract get program(): string;

    public async detect(): Promise<IBrowserMetadata> {
        let versionStr: string;

        try {
            versionStr = await resolveProgramVersion(this.program);
        } catch (err) {
            console.error(`Program "${this.program} version could not be resolved. Reason: ${err}"`)
            return undefined;
        }

        const version = Version.findFirst(versionStr);
        if (!version) {
            console.warn(`Version could not be found in string: ${versionStr}`);
            return undefined;
        }

        let executable: string;

        try {
            executable = await resolveProgramExecutable(this.program);
        } catch (err) {
            console.error(`Program "${this.program} executable path could not be resolved. Reason: ${err}"`)
            return undefined;
        }

        return new BrowserMetadata(executable, version);
    };
};
