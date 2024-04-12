import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AllCategory.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AllCategory() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const categories = [
        {
            src: 'https://content.pancake.vn/1/s900x900/fwebp/82/a7/ad/7f/e1b9cf52bc2359f43e886693f8acb4ae640a5e1340e18549ec1d76e9.jpg',
            text: 'Áo phông',
        },
        {
            src: 'https://content.pancake.vn/1/s900x900/fwebp/f0/31/9f/48/3d15d0542dd0ae7a2c426b1eb0e6b74606cf771c6991b923156a783f.jpg',
            text: 'Áo Hoodie',
        },
        {
            src: 'https://content.pancake.vn/1/s900x900/fwebp/0f/a1/ee/73/2532205810a59a949180d5cbe4ecdd1ee4a606a960369052ac5cb363.jpg',
            text: 'Áo Hoodie Zip',
        },
        {
            src: 'https://content.pancake.vn/1/s900x900/fwebp/36/69/d8/ee/3c94a21c3fce2a5c8b55c8eb140ee88710e4b1157c63d1c0c91d25bc.jpg',
            text: 'Áo Sweater',
        },
        {
            src: 'https://content.pancake.vn/1/s900x900/fwebp/8d/fe/15/c1/8e33253498b750091879e68716761f00ec2214f36376725776bf2346.jpg',
            text: 'Áo Polo',
        },
        {
            src: 'https://content.pancake.vn/1/s900x900/fwebp/92/06/dd/19/c6f2dab3ec3264fe80b75f2bac70d57bda159009d4b55deb41848fd2.jpg',
            text: 'Áo Croptop',
        },
        {
            src: 'https://content.pancake.vn/1/s900x900/fwebp/fc/c7/a9/e8/d117d060060a9c669532717d1fbcb86737b7f5a2f4f5361e7900e29e.jpg',
            text: 'Áo Thun Unisex',
        },
    ];

    const nextCategory = () => {
        setCurrentIndex((prevIndex) => (prevIndex === categories.length - 5 ? categories.length - 5 : prevIndex + 1));
    };

    const prevCategory = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    };

    return (
        <div className={cx('category-home')}>
            <h2 className={cx('title')}>Danh mục nổi bật</h2>
            <div className={cx('slider-container')}>
                <div className={cx('item-list')} style={{ overflow: 'hidden' }}>
                    {categories.map((category, index) => (
                        <div key={index} className={cx('item')} style={{ translate: `${-104 * currentIndex}%` }}>
                            <Image className={cx('item-Image')} src={category.src} alt={category.text} />
                            <p className={cx('item-Text')}>{category.text}</p>
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

export default AllCategory;
