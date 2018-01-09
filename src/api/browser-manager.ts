export interface IBrowserManager {
    /**
     * Disables updates of the installed browser
     */
    disableUpdates: () => Promise<void>;
};
