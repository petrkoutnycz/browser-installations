const call = require("./dist/helpers/powershell-file-call").powershellFileCall;

call("./assets/windows-chrome-updates.ps1", { "enable": 1 }).then(output => {
    console.log(output);
});