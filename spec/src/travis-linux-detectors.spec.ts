import {detectorFactory, IBrowserMetadata} from "browser-installations";

if (process.env["TRAVIS"]) {
    describe("linux detector > ", () => {
        it("chrome", async (done: DoneFn) => {
            const d = detectorFactory("chrome");
            let result: IBrowserMetadata;
            try {
                result = await d.detect();
            } catch (err) {
                done.fail(err);
            }

            expect(result.versionObj.major).toBe(64);
            expect(result.versionObj.minor).toBe(0);
            expect(result.versionObj.patch).toBe(3282);
            done();
        });

        it("firefox", async (done: DoneFn) => {
            const d = detectorFactory("firefox");
            let result: IBrowserMetadata;
            try {
                result = await d.detect();
            } catch (err) {
                done.fail(err);
            }

            expect(result.versionObj.major).toBe(57);
            expect(result.versionObj.minor).toBe(0);
            expect(result.versionObj.patch).toBe(3);
            done();
        });
    });
}
