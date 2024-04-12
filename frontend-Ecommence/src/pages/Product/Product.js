import { Link } from 'react-router-dom';
import config from '~/config';
import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Filter from './Filter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Product() {
    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const MENU_ITEMS = [
        {
            title: 'Mới nhất',
        },
        {
            title: 'Bán chạy nhất',
        },
        {
            title: 'Tăng dần',
        },
        {
            title: 'Giảm dần dần',
        },
    ];

    return (
        <div>
            {showFilter ? <Filter setShowFilter={setShowFilter} /> : null}

            <Image
                className={cx('item-Image-Banner')}
                src="https://pos.nvncdn.com/d0f3ca-7136/pc/20231020_ZIVc7Xkr.png"
                alt="Nguyen Van A"
            />
            <div className={cx('category-home')}>
                <div>
                    <h2>Sản phẩm Mới</h2>
                </div>
                <div className={cx('btn-div')}>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('sort-btn')}>
                            <FontAwesomeIcon icon={faSort} /> Sắp xếp theo
                        </button>
                    </Menu>

                    <div onClick={toggleFilter}>
                        <button className={cx('filter-btn')}>
                            <FontAwesomeIcon icon={faFilter} /> Lọc sản phẩm
                        </button>
                    </div>
                </div>
                {/* <Link to={config.routes.product}>
                    <div className={cx('seeAll-div')}>
                        <p>Xem tất cả</p>
                        <button className={cx('seeMore-btn')}>
                            <FontAwesomeIcon icon={faChevronCircleRight}></FontAwesomeIcon>
                        </button>
                    </div>
                </Link> */}
            </div>
            <div className={cx('item-list')}>
                <Link to={config.routes.detailProduct}>
                    <div className={cx('item')}>
                        <span className={cx('sale')}>-30%</span>
                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/7f39ae78a8e14c7f1df685fe241ee659"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                        <span className={cx('item-Price')}>199.000</span>
                    </div>
                </Link>
                <Link to={config.routes.detailProduct}>
                    <div className={cx('item')}>
                        <span className={cx('sale')}>-30%</span>

                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lomapch781br85"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                        <span className={cx('item-Price')}>199.000</span>
                    </div>
                </Link>
                <Link to={config.routes.detailProduct}>
                    <div className={cx('item')}>
                        <span className={cx('sale')}>-30%</span>

                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/1a0355f620ebb92961f846ba76ecda0d"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                        <span className={cx('item-Price')}>199.000</span>
                    </div>
                </Link>
                <Link to={config.routes.detailProduct}>
                    <div className={cx('item')}>
                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lovwscs5v5n22e"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                        <span className={cx('item-Price')}>199.000</span>
                    </div>
                </Link>
                <Link to={config.routes.detailProduct}>
                    <div className={cx('item')}>
                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lovwscs5v5n22e"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                        <span className={cx('item-Price')}>199.000</span>
                    </div>
                </Link>
                <Link to={config.routes.detailProduct}>
                    <div className={cx('item')}>
                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lovwscs5v5n22e"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                        <span className={cx('item-Price')}>199.000</span>
                    </div>
                </Link>
                <Link to={config.routes.detailProduct}>
                    <div className={cx('item')}>
                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/1a0355f620ebb92961f846ba76ecda0d"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                        <span className={cx('item-Price')}>199.000</span>
                    </div>
                </Link>
                <Link to={config.routes.detailProduct}>
                    <div className={cx('item')}>
                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/1a0355f620ebb92961f846ba76ecda0d"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                        <span className={cx('item-Price')}>199.000</span>
                    </div>
                </Link>
                <Link to={config.routes.detailProduct}>
                    <div className={cx('item')}>
                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/1a0355f620ebb92961f846ba76ecda0d"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                        <span className={cx('item-Price')}>199.000</span>
                    </div>
                </Link>
                <Link to={config.routes.detailProduct}>
                    <div className={cx('item')}>
                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/1a0355f620ebb92961f846ba76ecda0d"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                        <span className={cx('item-Price')}>199.000</span>
                    </div>
                </Link>
                <Link to={config.routes.detailProduct}>
                    <div className={cx('item')}>
                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/1a0355f620ebb92961f846ba76ecda0d"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                        <span className={cx('item-Price')}>199.000</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default Product;
