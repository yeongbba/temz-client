'use client';

import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/img/logo.png';
import { usePathname } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsChatLeftDots } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import HamburgerMenuIcon from '../common/icons/HamburgerMenuIcon/HamburgerMenuIcon';
import { useDrawer } from '@/app/context/DrawerContext';
import BasicButton from '../common/buttons/BasicButton/BasicButton';


const menus = [
  {
    href: '/link',
    text: 'TEMz Link',
  },
  {
    href: '/bag',
    text: 'In the bag',
  },
  {
    href: '/event',
    text: 'Event',
  },
];

export default function Navbar() {
  const pathName = usePathname();

  const { onToggleDrawer } = useDrawer();

  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <Link href='/'>
          <Image
            src={logo}
            alt={`temz logo`}
            priority
            sizes='650px'
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <div className={styles.leftMenus}>
          <ul>
            {menus.map(menu => <li key={menu.href}>{menu.text}</li>)}
          </ul>
        </div>
        <div className={styles.rightMenus}>
          <ul className={styles.icons}>
            <li><AiOutlineSearch /></li>
            <li><BsChatLeftDots /></li>
            <li><IoMdNotificationsOutline /></li>
            <li className={styles.hamburger} onClick={onToggleDrawer}><HamburgerMenuIcon /></li>
          </ul>
          <div className={styles.btns}>
            <BasicButton
              disabled={true}
              text={'로그인'}
              onClick={() => { }}
              white={true}
            />
            <BasicButton
              disabled={true}
              text={'회원가입'}
              onClick={() => { }}
              white={false}
            />
          </div>
        </div>
      </nav>
    </section>
  );
}