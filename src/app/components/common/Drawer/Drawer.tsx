'use client';

import { useDrawer } from '@/app/context/DrawerContext';
import styles from './Drawer.module.css';
import React from 'react';

type Props = {
    children?: React.ReactNode;
}

export default function Drawer({ children }: Props) {
    const { isOpen, onToggleDrawer } = useDrawer();
    return (
        <>
            <div className={`${styles.container} ${isOpen ? styles.open : ''}`} onClick={onToggleDrawer}>
            </div>
            <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
                {children}
                <h1>Drawer Content</h1>
                <p>This is the content of the drawer.</p>
            </div>
        </>

    );
};
