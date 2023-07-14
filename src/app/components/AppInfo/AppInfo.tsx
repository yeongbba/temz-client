import styles from './AppInfo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/img/logo.png';
import { notoSansKrLight } from '@/app/fonts/NotoSansKR';
import DividerVertcalIcon from '../common/icons/DividerVertcalIcon/DividerVertcalIcon';
import MoveTopButton from '../common/buttons/MoveTopButton/MoveTopButtons';

export default function AppInfo() {
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
      <article className={`${notoSansKrLight.className} ${styles.description}`}>
        <div className={styles.descriptionRow}>
          <span>(주)TEMZ</span>
          <span className={styles.divider}><DividerVertcalIcon /></span>
          <span>대표 정수한</span>
          <span className={styles.divider}><DividerVertcalIcon /></span>
          <span>사업자등록번호 122-759-45222</span>
        </div>
        <div className={styles.descriptionRow}>
          <span>주소 서울특별시 강남구 도산대로89길 1888-12 (청담동)</span>
          <span className={styles.divider}><DividerVertcalIcon /></span>
          <span>대표번호 02-3333-4444</span>
        </div>
        <div className={styles.descriptionRow}>
          <span>고객센터 이메일 문의 support@temz.io</span>
          <span className={styles.divider}><DividerVertcalIcon /></span>
          <span>제휴문의</span>
        </div>
        <div className={styles.descriptionRow}>
          <span>운영시간 10:00 ~ 18:00 주말/공휴일 제외</span>
        </div>
        <div className={styles.copyRight}>
          <span>Copyright 2023. TEMz All rights reserved.</span>
        </div>
      </article>
      <div className={styles.policy}>
        <div className={styles.policyLinks}>
          <span>
            <Link href='/' prefetch={false}>이용약관</Link>
          </span>
          <span>
            <Link href='/' prefetch={false}>개인정보처리방침</Link>
          </span>
        </div>
        <div className={styles.moveTop}>
          <MoveTopButton />
        </div>
      </div>
    </section>
  );
}
