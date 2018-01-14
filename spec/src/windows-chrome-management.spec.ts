import * as os from "os";
import * as path from "path";
import * as fs from "fs";
import {WindowsChromeManager} from "browser-installations";

const executablePath = path.join(process.env["ProgramFiles(x86)"], "Google", "Update", "GoogleUpdate.exe");

if (os.platform() === "win32" && fs.existsSync(executablePath)) {
    describe("windows chrome management >", () => {
        const man = new WindowsChromeManager();

        it("enables and disables updates", async (done: DoneFn) => {
            try {
                await man.setUpdates(false);
                const existsDisabled = fs.existsSync(executablePath);
                // await man.setUpdates(true);
                const existsEnabled = fs.existsSync(executablePath);
                expect(existsDisabled).toBe(false);
                expect(existsEnabled).toBe(true);
                done();
            } catch (err) {
                done.fail(err);
            }
        });
    });
}
