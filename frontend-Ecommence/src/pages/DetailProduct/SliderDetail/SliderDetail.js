import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './SliderDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const images = [
    'https://pos.nvncdn.com/d0f3ca-7136/ps/20230313_Nok6q2koiS.jpeg',
    'https://pos.nvncdn.com/d0f3ca-7136/ps/20230313_K0bKAhvbrb.jpeg',
    'https://pos.nvncdn.com/d0f3ca-7136/ps/20230313_H97BYyaRmF.jpeg',
];

function SliderDetail() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
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
            <div className={cx('item')}>
                {images.map((index) => (
                    <img key={index} className={cx('item-image')} src={index} alt={`Slide ${currentIndex}`} />
                ))}
            </div>
        </>
    );
}
export default SliderDetail;
