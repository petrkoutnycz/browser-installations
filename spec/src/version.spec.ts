import {Version} from "browser-installations/dist/api";

describe("version > ", () => {
    it("parses 3-digit version in text", () => {
        const v = Version.parse("my text 1.2.3 some other text");
        expect(v.major).toBe(1);
        expect(v.minor).toBe(2);
        expect(v.patch).toBe(3);
        expect(v.build).toBeUndefined();
    });

    it("parses 3-digit version", () => {
        const v = Version.parse("1.100.200");
        expect(v.major).toBe(1);
        expect(v.minor).toBe(100);
        expect(v.patch).toBe(200);
        expect(v.build).toBeUndefined();
    });

    it("parses 4-digit version", () => {
        const v = Version.parse("1.100.200.300");
        expect(v.major).toBe(1);
        expect(v.minor).toBe(100);
        expect(v.patch).toBe(200);
        expect(v.build).toBe(300);
    });
});
