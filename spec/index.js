const pkg = require("browser-installations");
const factory = new pkg.DetectorFactory();
const metadata = factory.create("chrome").detect();
console.log(metadata);
