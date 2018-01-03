import * as mockery from "mockery";
import {DetectorFactory, LinuxChromeDetector, LinuxFirefoxDetector} from "browser-installations";

describe("detector factory > ", () => {
    let platformValue: NodeJS.Platform;
    let osMock = {
        platform: () => {
            return platformValue;
        }
    };
    let factory: DetectorFactory;

    beforeEach(() => {
        mockery.enable({ useCleanCache: true, warnOnUnregistered: false });
        mockery.registerMock("os", osMock);
        mockery.registerAllowable("browser-installations");

        // ctor with mocked 'require("os")'
        const factoryCtor = require("browser-installations").DetectorFactory;
        factory = new factoryCtor();
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
            const detector = factory.create("chrome");
            expect(detector.constructor instanceof LinuxChromeDetector.constructor).toBe(true);
        });

        it("works for firefox", () => {
            const detector = factory.create("firefox");
            expect(detector.constructor instanceof LinuxFirefoxDetector.constructor).toBe(true);
        });
    });
});
