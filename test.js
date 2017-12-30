const execSync = require("child_process").execSync;
const ress = execSync(
    "powershell -Command (Get-Item 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe').VersionInfo.FileVersion",
    (err, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);

    });
console.log(`output: ${ress}`);