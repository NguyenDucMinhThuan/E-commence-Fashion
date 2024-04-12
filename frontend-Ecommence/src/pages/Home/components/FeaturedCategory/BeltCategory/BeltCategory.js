import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BeltCategory.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function BeltCategory() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const categories = [
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-day-nit-y2010-a16-0019744/745d9ea6-e392-1000-00e4-0019eb6df78f.jpg?w=540&h=756&c=true&ntf=false',
            text: 'Thắt lưng nam đơn giản basic',
            price: 240,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/ao-thun-sweater-y0-the-style-of-no-style-49-0021981/19ddc10c-5b6c-0c00-8c72-001a2d6abb17.jpg?w=540&h=756&c=true&ntf=false',
            text: 'Thắt lưng nam đơn giản basic',
            price: 240,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-day-nit-no-style-dn14-0018501/df8dbc56-2103-0c00-a30b-0019eb6da141.jpg?w=540&h=756&c=true&ntf=false',
            text: 'Thắt lưng nam đơn giản basic',
            price: 240,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-day-nit-no-style-dn22-0018718/43176363-1bc4-0f00-62ac-0019eb6de2ae.jpg?w=540&h=756&c=true&ntf=false',
            text: 'Thắt lưng nam đơn giản basic',
            price: 240,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-day-nit-no-style-dn18-0018636/aaf5aec9-4251-0900-947b-00187d6ca578.jpg?w=540&h=756&c=true&ntf=false',
            text: 'Thắt lưng nam đơn giản basic',
            price: 240,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-day-nit-on-gian-m17-0020426/734370ba-fabf-0100-94a4-00189e40a615.jpg?w=540&h=756&c=true&ntf=false',
            text: 'Thắt lưng nam đơn giản basic',
            price: 240,
        },
        {
            src: 'https://cdn2.yame.vn/pimg/pktt-day-nit-no-style-dn17-0018504/89c653c5-3996-0d00-1a99-0019eb6dba71.jpg?w=540&h=756&c=true&ntf=false',
            text: 'Thắt lưng nam đơn giản basic',
            price: 240,
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
            <h2 className={cx('title')}>Thắt lưng</h2>
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

export default BeltCategory;
