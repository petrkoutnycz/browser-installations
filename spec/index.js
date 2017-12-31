const pkg = require("browser-installations");
const api = require("browser-installations/dist/api");

const factory = new pkg.DetectorFactory();
const detector = factory.create("chrome");

if (detector) {
    detector.detect().then(val => {
        console.log(val);
    });
}

const v = api.Version.parse("1.2.3.4");
console.log(v);