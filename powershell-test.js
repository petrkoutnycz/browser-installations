const call = require("./dist/helpers/powershell-file-call").powershellFileCall;

call("./src/management/windows/chrome-updates.ps1", { "enable": 0 }).then(output => {
    console.log(output);
});