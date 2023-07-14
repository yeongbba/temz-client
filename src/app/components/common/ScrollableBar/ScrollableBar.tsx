'use client';

import Carousel, { ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './ScrollableBar.module.css';

type Props = {
    responsive: ResponsiveType
    children?: React.ReactNode
}

export default function ScrollableBar({
    responsive,
    children,
}: Props) {
    return (
        <Carousel
            responsive={responsive}
            containerClass={styles['react-multi-carousel-list']}
            dotListClass={styles['react-multi-carousel-dot-list']}
            autoPlay={true}
            autoPlaySpeed={5000}
            showDots={true}
            infinite={true}
            arrows={false}>
            {children}
        </Carousel>
    );
}
