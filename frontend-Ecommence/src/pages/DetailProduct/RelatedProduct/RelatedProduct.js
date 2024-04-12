import { Link } from 'react-router-dom';
import config from '~/config';
import Image from '~/components/Image';

import classNames from 'classnames/bind';
import styles from './RelatedProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function RelatedProduct() {
    return (
        <div>
            <div className={cx('category-home')}>
                <div>
                    <h2>Sản phẩm liên quan</h2>
                </div>
                <Link to={config.routes.product}>
                    <div className={cx('seeAll-div')}>
                        <p>Xem tất cả</p>
                        <button className={cx('seeMore-btn')}>
                            <FontAwesomeIcon icon={faChevronCircleRight}></FontAwesomeIcon>
                        </button>
                    </div>
                </Link>
            </div>
            <div className={cx('item-list')}>
                <div className={cx('item')}>
                    <Link to={config.routes.detailProduct}>
                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loyx8hbsmvdn18"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                    </Link>
                    <span className={cx('item-Price')}>199.000</span>
                </div>
                <div className={cx('item')}>
                    <Link to={config.routes.detailProduct}>
                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loyx8hbsshnf88"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                    </Link>
                    <span className={cx('item-Price')}>199.000</span>
                </div>
                <div className={cx('item')}>
                    <Link to={config.routes.detailProduct}>
                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loyx8hbsshnf88"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                    </Link>
                    <span className={cx('item-Price')}>199.000</span>
                </div>
                <div className={cx('item')}>
                    <Link to={config.routes.detailProduct}>
                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq33d1bcz93m51"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                    </Link>
                    <span className={cx('item-Price')}>199.000</span>
                </div>
                <div className={cx('item')}>
                    <Link to={config.routes.detailProduct}>
                        <Image
                            className={cx('item-Image')}
                            src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq33d1bcwfyq9e"
                            alt="Nguyen Van A"
                        />
                        <p className={cx('item-Text')}>
                            Áo phông unisex form rộng oversize màu đen xám cho giới trẻ mẫu đơn giản
                        </p>
                    </Link>
                    <span className={cx('item-Price')}>199.000</span>
                </div>
            </div>
        </div>
    );
}
export default RelatedProduct;
