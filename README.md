# browser-installations
node.js library for detection of installed browsers and their management

## Installations
It supports detection of following browsers:
*   Linux – Chrome, Firefox
*   Windows – Chrome, Firefox

### Example of detecting installed Chrome version (Typescript)
```
import {detectorFactory} from "browser-installations";
const detector = detectorFactory("chrome");
const chromeMetadata = detector.detect();
console.log(`Chrome version: ${chromeMetadata.version}`);
```

## Management
It also supports disabling of browser autoupdates. It is currently available for Chrome on both Linux and Windows.
Note: this functionality needs to be run under administrator account since it handles system files.

### Example of disabling auto updates of Chrome (Typescript)
```
import {managerFactory} from "browser-installations";
const manager = managerFactory("chrome");
await manager.setUpdates(false);
```
## Changelog
Tool history can be found in [CHANGELOG.md](CHANGELOG.md)