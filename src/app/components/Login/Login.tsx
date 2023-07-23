'use client';

import Image from 'next/image';
import styles from './Login.module.css';
import defaultUser from '../../../../public/img/default-user.png';
import { notoSansKrLight } from '@/app/fonts/NotoSansKR';

type Props = {
    userInfo: {
        profile?: string;
        userName?: string;
    },
}

export default function Login({ userInfo }: Props) {
    const { profile, userName } = userInfo;
    return (
        <section className={`${notoSansKrLight.className} ${styles.container}`}>
            <div className={styles.profile}>
                <Image src={profile ? profile : defaultUser} alt={`profile`} fill />
            </div>
            <span className={styles.userName}>
                {profile ? userName : '로그인 해주세요.'}
            </span>
        </section>
    );
}