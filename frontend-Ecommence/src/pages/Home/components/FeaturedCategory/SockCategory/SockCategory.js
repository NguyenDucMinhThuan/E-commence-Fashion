import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SockCategory.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function SockCategory() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const categories = [
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-vo-nguyen-ban-v22-0021854/1d1c649f-8186-0f01-f54c-0019cb425e16.jpg?w=540&h=756&c=true&ntf=false',
            text: 'Nón POC PK02 Xanh Rêu Size Người Lớn',
            price: 99,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-vo-nguyen-ban-v15-0021607/9e4bce57-3917-2e01-4fc7-001983bda9a3.jpg?w=540&h=756&c=true&ntf=false',
            text: 'Nón POC PK02 Xanh Rêu Size Người Lớn',
            price: 99,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-vo-nguyen-ban-v16-0021612/f8e1e667-285b-6b01-7916-001983bf2979.jpg?w=540&h=756&c=true&ntf=false',
            text: 'Nón POC PK02 Xanh Rêu Size Người Lớn',
            price: 99,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-vo-nguyen-ban-v15-0021608/01a3b489-abfe-3a01-70e8-001983bdfead.jpg?w=540&h=756&c=true&ntf=false',
            text: 'Nón POC PK02 Xanh Rêu Size Người Lớn',
            price: 99,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-vo-nguyen-ban-v15-0021608/01a3b489-abfe-3a01-70e8-001983bdfead.jpg?w=540&h=756&c=true&ntf=false',
            text: 'Nón POC PK02 Xanh Rêu Size Người Lớn',
            price: 99,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-vo-nguyen-ban-v17-0021613/418cd4b1-2edd-7701-2ff8-001983bf583e.jpg?w=540&h=756&c=true&ntf=false',
            text: 'Nón POC PK02 Xanh Rêu Size Người Lớn',
            price: 99,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-vo-nguyen-ban-v15-0021609/c116b10f-6ec8-4701-151c-001983be3e87.jpg?w=540&h=756&c=true&ntf=false',
            text: 'Áo Thun Unisex',
            price: 99,
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
            <h2 className={cx('title')}>Tất</h2>
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

export default SockCategory;
