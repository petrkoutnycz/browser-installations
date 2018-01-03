import {Version} from "browser-installations/dist/api";

describe("version > ", () => {
    it("does not parse an empty string", () => {
        const v = Version.parse("");
        expect(v).toBeUndefined();
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

    it("does not find any version in an empty string", () => {
        const first = Version.findFirst("");
        expect(first).toBeUndefined();
    });

    it("finds first 3-digit version in the string", () => {
        const first = Version.findFirst("text 100.200.300");
        expect(first.major).toBe(100);
        expect(first.minor).toBe(200);
        expect(first.patch).toBe(300);
    });

    it("finds first 3-digit version in the string with multiple versions", () => {
        const first = Version.findFirst("text 100.200.300 fsda fsdaf 5.43.89");
        expect(first.major).toBe(100);
        expect(first.minor).toBe(200);
        expect(first.patch).toBe(300);
    });

    it("does not first version in the string not containing a version", () => {
        const first = Version.findFirst("text 1234 fsd fsdf");
        expect(first).toBeUndefined();
    });

    it("toString() works for 3-digit version", () => {
        const v = new Version(100, 200, 300);
        expect(v.toString()).toBe("100.200.300");
    });

    it("toString() works for 4-digit version", () => {
        const v = new Version(100, 200, 300, 400);
        expect(v.toString()).toBe("100.200.300.400");
    });
});
