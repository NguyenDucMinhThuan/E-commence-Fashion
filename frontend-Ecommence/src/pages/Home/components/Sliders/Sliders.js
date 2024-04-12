import React, { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Sliders.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const images = [
    'https://content.pancake.vn/1/s3900x1500/fwebp/50/f7/cd/fd/cb35023174a4ad06750ef34c981d4fd7b1897627711345df1af7dfc2.jpg',
    'https://content.pancake.vn/1/s3900x1500/fwebp/03/cc/58/f8/bb4e5e955d7b35e219c85e8edee2afd67ad56829518bd96ecbb10050.jpg',
    'https://content.pancake.vn/1/s3900x1650/fwebp/c5/ba/da/35/f0aed1aa5b7538b6f4dec746b518bc0b4045e35ca77993ba792040ba.jpg',
];

function Sliders() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, 3000);

        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [currentIndex]);

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={cx('slider-container')}>
            <div style={{ display: 'flex', overflow: 'hidden' }}>
                {images.map((index) => (
                    <img
                        key={index}
                        className={cx('slider-Image')}
                        src={index}
                        alt={`Slide ${currentIndex}`}
                        style={{ translate: `${-100 * currentIndex}%` }}
                    />
                ))}
            </div>
            <div className={cx('button-container')}>
                <button className={cx('prevSlide-btn')} onClick={goToPrevSlide}>
                    <FontAwesomeIcon icon={faChevronCircleLeft}></FontAwesomeIcon>
                </button>
                <button className={cx('nextSlide-btn')} onClick={goToNextSlide}>
                    <FontAwesomeIcon icon={faChevronCircleRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
}
export default Sliders;
