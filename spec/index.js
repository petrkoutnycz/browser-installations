const pkg = require("browser-installations");
const factory = new pkg.DetectorFactory();
factory.create("chrome").detect().then(val => {
    console.log(val);
});

