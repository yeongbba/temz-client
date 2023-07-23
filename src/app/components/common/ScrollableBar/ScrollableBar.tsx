'use client';

import Carousel, { ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './ScrollableBar.module.css';

type Props = {
    responsive: ResponsiveType,
    autoPlay: boolean,
    showDots: boolean,
    children?: React.ReactNode
}

export default function ScrollableBar({
    responsive,
    autoPlay = true,
    showDots = true,
    children,
}: Props) {
    return (
        <Carousel
            responsive={responsive}
            containerClass={styles['react-multi-carousel-list']}
            dotListClass={styles['react-multi-carousel-dot-list']}
            autoPlay={autoPlay}
            autoPlaySpeed={5000}
            showDots={showDots}
            infinite={true}
            arrows={false}>
            {children}
        </Carousel>
    );
}
