import {DetectorFactory, IBrowserMetadata} from "browser-installations";

if (process.env["TRAVIS"]) {
    describe("linux detector > ", () => {
        let factory: DetectorFactory;

        beforeEach(() => {
            factory = new DetectorFactory();
        });

        it("chrome", async (done: DoneFn) => {
            const d = factory.create("chrome");
            let result: IBrowserMetadata;
            try {
                result = await d.detect();
            } catch (err) {
                done.fail(err);
            }

            expect(result.versionObj.major).toBe(63);
            expect(result.versionObj.minor).toBe(0);
            expect(result.versionObj.patch).toBe(3239);
            done();
        });

        it("firefox", async (done: DoneFn) => {
            const d = factory.create("firefox");
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
