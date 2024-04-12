import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './WalletCategory.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function WalletCategory() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const categories = [
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-vi-nguyen-ban-v25-0021246/3c54e987-4fdc-8b01-8b33-001941bd3c52.jpg?w=540&h=756&c=true&ntf=false',
            text: 'PKTT Ví Da Nguyên Bản V07',
            price: 200,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-vi-v15-0020199/c83a303a-7944-0a00-8a64-0017dd14d9c1.jpg?w=540&h=756&c=true&ntf=false',
            text: 'PKTT Ví Da Nguyên Bản V07',
            price: 200,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-vi-kim-bao-03-0022804/f16c887a-4eb8-0100-ac4a-001ad0442ab4.jpg?w=540&h=756&c=true&ntf=false',
            text: 'PKTT Ví Da Nguyên Bản V07',
            price: 200,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-day-nit-no-style-dn22-0018718/43176363-1bc4-0f00-62ac-0019eb6de2ae.jpg?w=540&h=756&c=true&ntf=false',
            text: 'PKTT Ví Da Nguyên Bản V07',
            price: 200,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/vi-nam-no-style-a86-0018943/32586910-3ee7-3f00-3b58-00163ef04a95.jpg?w=540&h=756&c=true&ntf=false',
            text: 'PKTT Ví Da Nguyên Bản V07',
            price: 200,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/vi-nam-y2010-c21-0019715/24d85f3a-d6e9-0b00-b5fa-001870dfdbcd.jpg?w=540&h=756&c=true&ntf=false',
            text: 'PKTT Ví Da Nguyên Bản V07',
            price: 200,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/vi-nam-y2010-c03-0019232/0b32129d-c7a7-0500-0392-0018733f0b8c.jpg?w=540&h=756&c=true&ntf=false',
            text: 'PKTT Ví Da Nguyên Bản V07',
            price: 200,
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
            <h2 className={cx('title')}>Ví</h2>
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

export default WalletCategory;
