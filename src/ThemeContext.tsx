import React, {createContext, useState, useContext, ReactNode, useEffect} from 'react';

interface ThemeContextType {
    isNightMode: boolean;
    toggleNightMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isNightMode, setIsNightMode] = useState(false);

    const toggleNightMode = () => {
        setIsNightMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        if (isNightMode) {
            document.body.classList.add('night-mode');
        } else {
            document.body.classList.remove('night-mode');
        }
    }, [isNightMode]);

    return (
        <ThemeContext.Provider value={{ isNightMode, toggleNightMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
