import Image from 'next/image';
import ScrollableBar from './components/common/ScrollableBar/ScrollableBar'
import styles from './page.module.css'
import banner from '../../public/img/banner.png';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Home() {



  return (
    <section className={styles.main}>
      <ScrollableBar responsive={responsive}>
        <div className={styles.ban}>
          <Image src={banner} alt={`banner1`} priority fill />
        </div>
        <Image src={banner} alt={`banner2`} fill />
        <Image src={banner} alt={`banner3`} fill />
        <Image src={banner} alt={`banner4`} fill />
      </ScrollableBar>
    </section>
  )
}
