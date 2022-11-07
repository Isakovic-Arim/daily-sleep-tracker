import { createContext, useContext, useState } from "react";

const StatsContext = createContext();

export function useStats() {
    return useContext(StatsContext);
}

export function StatsContextProvider({children}) {
    const [stats, setStats] = useState([]);
    
    const value = {
        stats,
        setStats
    };

    return (
        <StatsContext.Provider value={value}>{children}</StatsContext.Provider>
    )
}