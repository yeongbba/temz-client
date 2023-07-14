'use client';

import { createContext, useContext, useState } from "react";

type DrawerValue = {
    isOpen?: boolean;
    onToggleDrawer?: () => void;
};

export const DrawerContext = createContext<DrawerValue>({});

export function DrawerProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const onToggleDrawer = () => {
        setIsOpen((prev) => !prev);
    }
    return (
        <DrawerContext.Provider value={{ isOpen, onToggleDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
}

export function useDrawer() {
    return useContext(DrawerContext);
}
