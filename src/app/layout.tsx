import './globals.css';
import styles from './layout.module.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar/Navbar'
import { notoSansKrMedium } from './fonts/NotoSansKR';
import AppInfo from './components/AppInfo/AppInfo';
import Drawer from './components/common/Drawer/Drawer';
import { DrawerProvider } from './context/DrawerContext';

export const metadata: Metadata = {
  title: 'Welcome to temz',
  description: 'Welcome to temz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSansKrMedium.className}>
        <DrawerProvider>
          <section className={styles.container}>
            <header className={`${styles.header} ${styles.grid}`}>
              <Navbar />
            </header>
            <main className={styles.main}>
              {children}
            </main>
            <footer className={styles.footer}>
              <AppInfo />
            </footer>
            <Drawer>
              <div>hello</div>
            </Drawer>
          </section>
        </DrawerProvider>
      </body>
    </html>
  )
}
