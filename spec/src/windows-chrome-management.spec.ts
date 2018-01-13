import * as os from "os";
import {WindowsChromeManager} from "browser-installations";

if (os.platform() === "win32") {
    describe("windows chrome management >", () => {
        const man = new WindowsChromeManager();

        xit("disables updates", (done: DoneFn) => {
            man.setUpdates(false).then(done).catch(done.fail);
        });
    });
}
