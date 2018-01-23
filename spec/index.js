const path = require("path");
const Jasmine = require("jasmine");
const reporters = require("jasmine-reporters");

const jasmine = new Jasmine();

jasmine.addReporter(new reporters.TerminalReporter({
    verbosity: 3,
    color: true,
    showStack: false
}));

jasmine.loadConfigFile(path.join(__dirname, "jasmine.json"));
jasmine.execute();
