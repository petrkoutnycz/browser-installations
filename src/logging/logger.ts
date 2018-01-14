import * as path from "path";
import * as log4js from "log4js";
import {loggingLevel} from "./level";

log4js.configure({
    appenders: {
      cheeseLogs: { type: "dateFile", filename: path.join(__dirname, "../../.logs/output.log"), backups: 3 },
      console: { type: "console" }
    },
    categories: {
      default: { appenders: ["console", "cheeseLogs"], level: loggingLevel }
    }
  });

export const loggerFactory = (category?: string): log4js.Logger => {
    return log4js.getLogger(category);
};

const logger = loggerFactory();
export {logger};
