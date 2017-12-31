import {Version} from "browser-installations/dist/api";

describe("version > ", () => {
    it("parses 4-digit version", () => {
        const v = Version.parse("1.100.200.300");
        expect(v.major).toBe(1);
        expect(v.minor).toBe(100);
        expect(v.patch).toBe(200);
        expect(v.build).toBe(300);
    });
});
