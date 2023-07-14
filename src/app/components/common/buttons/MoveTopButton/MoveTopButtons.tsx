'use client';

import { useEffect, useState } from 'react';
import styles from './MoveTopButton.module.css';
import { AiOutlineArrowUp } from 'react-icons/ai';


export default function MoveTopButton() {
    return (
        <button
            className={styles.btn}
            onClick={() => {
                document.body.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }}>
            <AiOutlineArrowUp />
        </button>
    );
}
