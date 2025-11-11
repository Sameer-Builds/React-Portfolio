import { createContext, useContext } from "react";
import data from "../data/data.json"; // ✅ Direct import — works perfectly inside src

const SiteDataContext = createContext();

export const SiteDataProvider = ({ children }) => {
    return (
        <SiteDataContext.Provider value={data}>
            {children}
        </SiteDataContext.Provider>
    );
};

export const useSiteData = () => useContext(SiteDataContext);
