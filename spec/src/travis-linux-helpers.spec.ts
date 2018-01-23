import * as path from "path";
import {bashFileCall} from "browser-installations/dist/helpers";

function test() {
    describe("linux helpers >", () => {
        it("successfully returns echo", async (done: DoneFn) => {
            const helloPath = path.join(__dirname, "../assets/echo-hello.sh");
            const result = await bashFileCall(helloPath);
            expect(result).toBe("Hello World");
            done();
        });
    });
}

if (process.env["TRAVIS"]) {
    test();
}
