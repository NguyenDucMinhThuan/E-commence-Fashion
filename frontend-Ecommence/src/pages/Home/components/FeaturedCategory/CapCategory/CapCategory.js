import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CapCategory.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function CapCategory() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const categories = [
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-non-speed-48-0022390/e1dd7161-0e9d-6a01-d65d-001aee1d6492.jpg?w=540&h=540&c=false',
            text: 'Nón POC PK02 Xanh Rêu Size Người Lớn',
            price: 199,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-non-speed-49-0022391/12a3e55b-6aab-7301-c3bc-001aee1d82cb.jpg?w=540&h=540&c=false',
            text: 'Nón POC PK02 Xanh Rêu Size Người Lớn',
            price: 199,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-non-luoi-trai-vai-du-tron-phu-kien-no-style-113-0023116/aad304c6-68f0-1c01-fb4c-001af43b6726.jpg?w=540&h=540&c=false',
            text: 'Nón POC PK02 Xanh Rêu Size Người Lớn',
            price: 199,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-non-luoi-trai-vai-poly-phu-kien-no-style-113-0023114/69aa11ad-d1b2-0601-f28a-001af43b1116.jpg?w=540&h=540&c=false',
            text: 'Nón POC PK02 Xanh Rêu Size Người Lớn',
            price: 199,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-non-y-nguyen-ban-ver12-0021818/c6ef1ed7-0879-4001-fa98-0019c0442b32.jpg?w=540&h=540&c=false',
            text: 'Nón POC PK02 Xanh Rêu Size Người Lớn',
            price: 199,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-non-y-nguyen-ban-ver13-0021821/eca4e63b-20d0-4501-fab7-0019bac2fa3e.jpg?w=540&h=540&c=false',
            text: 'Nón POC PK02 Xanh Rêu Size Người Lớn',
            price: 199,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-non-y-nguyen-ban-ver13-0021819/429cf680-4979-2701-4946-0019bac23a5d.jpg?w=540&h=540&c=false',
            text: 'Áo Thun Unisex',
            price: 199,
        },
    ];

    const nextCategory = () => {
        setCurrentIndex((prevIndex) => (prevIndex === categories.length - 3 ? categories.length - 3 : prevIndex + 1));
    };

    const prevCategory = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    };

    return (
        <div className={cx('category-home')}>
            <h2 className={cx('title')}>Nón</h2>
            <div className={cx('slider-container')}>
                <div className={cx('item-list')} style={{ overflow: 'hidden' }}>
                    {categories.map((category, index) => (
                        <div key={index} className={cx('item')} style={{ translate: `${-112 * currentIndex}%` }}>
                            <Image className={cx('item-Image')} src={category.src} alt={category.text} />
                            <p className={cx('item-Text')}>{category.text}</p>
                            <span className={cx('item-Price')}>{category.price}</span>
                        </div>
                    ))}
                </div>
                <div className={cx('button-container')}>
                    <button className={cx('prevSlide-btn')} onClick={prevCategory}>
                        <FontAwesomeIcon icon={faChevronCircleLeft}></FontAwesomeIcon>
                    </button>
                    <button className={cx('nextSlide-btn')} onClick={nextCategory}>
                        <FontAwesomeIcon icon={faChevronCircleRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CapCategory;
