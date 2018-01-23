import * as mockery from "mockery";
import {detectorFactory, LinuxChromeDetector, LinuxFirefoxDetector} from "browser-installations";
import {IDetectorFactory} from "browser-installations/dist/api";

describe("detector factory > ", () => {
    let platformValue: NodeJS.Platform;
    let osMock = {
        platform: () => {
            return platformValue;
        }
    };

    let factory: IDetectorFactory;

    beforeEach(() => {
        mockery.enable({ useCleanCache: true, warnOnUnregistered: false });
        mockery.registerMock("os", osMock);
        mockery.registerAllowable("browser-installations");

        // ctor with mocked 'require("os")'
        factory = require("browser-installations").detectorFactory;
    });

    afterEach(() => {
        mockery.disable();
        mockery.deregisterAll();
    });

    describe("linux env >", () => {
        beforeEach(() => {
            platformValue = "linux";
        });

        it("works for chrome", () => {
            const detector = factory("chrome");
            expect(detector.constructor instanceof LinuxChromeDetector.constructor).toBe(true);
        });

        it("works for firefox", () => {
            const detector = factory("firefox");
            expect(detector.constructor instanceof LinuxFirefoxDetector.constructor).toBe(true);
        });
    });
});
