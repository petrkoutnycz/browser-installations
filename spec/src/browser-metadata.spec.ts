import {BrowserMetadata, Version} from "browser-installations";

describe("browser metadata >", () => {
    it("creates instance by version string", () => {
        const bmd = new BrowserMetadata("program", "100.200.300");
        expect(bmd).toBeDefined();
        expect(bmd.version).toBe("100.200.300");
    });

    it("creates instance by version object", () => {
        const v = new Version(100, 200, 300);
        const bmd = new BrowserMetadata("program", v);
        expect(bmd).toBeDefined();
        expect(bmd.version).toBe("100.200.300");
        expect(bmd.versionObj).toEqual(v);
    });
});