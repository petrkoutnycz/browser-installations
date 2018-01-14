export interface IBrowserManager {
    /**
     * Enables or disables updates of the installed browser
     */
    setUpdates: (enable: boolean) => Promise<void>;
};
