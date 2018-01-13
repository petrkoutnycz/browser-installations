import {join} from "path";

export const assetPath = (fileName: string): string => {
    return join(__dirname, "../../assets/", fileName);
};
