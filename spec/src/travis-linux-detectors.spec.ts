import * as fs from "fs";
import * as path from "path";

import {detectorFactory, IBrowserMetadata} from "browser-installations";
import {Version} from "browser-installations/dist/api";

if (process.env["TRAVIS"]) {
    describe("linux detector > ", () => {
        describe("chrome >", () => {
            let version: Version;

            beforeEach(() => {
                const versionText = fs.readFileSync(path.join(__dirname, "../temp/chrome-version.txt"), {
                    encoding: "utf-8"
                });
                version = Version.findFirst(versionText);
            });

            it("detects currently installed instance", async (done: DoneFn) => {
                const d = detectorFactory("chrome");
                let result: IBrowserMetadata;
                try {
                    result = await d.detect();
                } catch (err) {
                    done.fail(err);
                }
    
                expect(result.versionObj.major).toBe(version.major);
                expect(result.versionObj.minor).toBe(version.minor);
                expect(result.versionObj.patch).toBe(version.patch);
                done();
            });
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
