import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faCheck, faShirt, faShop, faStar, faTruck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const images = [
    'https://pos.nvncdn.com/d0f3ca-7136/ps/20230313_Nok6q2koiS.jpeg',
    'https://pos.nvncdn.com/d0f3ca-7136/ps/20230313_K0bKAhvbrb.jpeg',
    'https://pos.nvncdn.com/d0f3ca-7136/ps/20230313_H97BYyaRmF.jpeg',
];

function Checkout() {
    const [colorStates, setColorStates] = useState({
        white: false,
        black: false,
        yellow: false,
    });
    const [sizeStates, setSizeStates] = useState({
        M: false,
        L: false,
        XL: false,
    });

    const checkSize = (size) => {
        setSizeStates((prevState) => ({
            ...prevState,
            [size]: !prevState[size],
        }));
    };
    const checkColor = (color) => {
        setColorStates((prevState) => ({
            ...prevState,
            [color]: !prevState[color],
        }));
    };

    return (
        <div className={cx('Wrapper')}>
            <div className={cx('headline')}>Trang chủ / Phụ kiện / Nón / Bucket</div>
            <div className={cx('about-product')}>
                <div className={cx('info-product')}>
                    <div className={cx('name-product')}>NÓN BUCKET JEAN UNISEX - TOTODAY - PLAIN COLOR</div>
                    <div className={cx('estimate')}>
                        <div className={cx('rate')}>
                            <FontAwesomeIcon icon={faStar} className={cx('star')} />
                            <p className={cx('rate-star')}>5/5</p>
                        </div>
                        <span className={cx('rate-count')}>Đã bán : 20</span>
                    </div>
                    <div className={cx('price-product')}>160.000đ</div>
                    <div className={cx('color-product')}>
                        <div className={cx('color-text')}>Màu sắc</div>
                        <div className={cx('color-choose')}>
                            <ul className={cx('ul')} style={{ flexWrap: 'wrap' }}>
                                {images.map((index) => (
                                    <li className={cx('li-color')}>
                                        <div
                                            className={cx('div-checkbox-color', colorStates.white && 'checked-Color')}
                                            id="white"
                                            style={{ backgroundColor: 'white' }}
                                            onClick={() => checkColor('white')}
                                        >
                                            <img key={index} className={cx('item-image')} src={index} alt="" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('size-product')}>
                        <div className={cx('size')}>
                            <div className={cx('size-text')}>Size</div>
                            <div className={cx('size-choose')}>
                                <ul className={cx('ul')} style={{ flexWrap: 'wrap' }}>
                                    <li className={cx('li-size')}>
                                        <div
                                            className={cx('div-checkbox-size', sizeStates.M && 'checked-Color')}
                                            id="M"
                                            onClick={() => checkSize('M')}
                                        >
                                            M
                                        </div>
                                    </li>
                                    <li className={cx('li-size')}>
                                        <div
                                            className={cx('div-checkbox-size', sizeStates.L && 'checked-Color')}
                                            id="L"
                                            onClick={() => checkSize('L')}
                                        >
                                            L
                                        </div>
                                    </li>
                                    <li className={cx('li-size')}>
                                        <div
                                            className={cx('div-checkbox-size', sizeStates.XL && 'checked-Color')}
                                            id="XL"
                                            onClick={() => checkSize('XL')}
                                        >
                                            XL
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('size-chart')}>
                            <FontAwesomeIcon icon={faShirt} className={cx('icon-commit')} />
                            Size chart
                        </div>
                    </div>
                    <div className={cx('quantity')}>
                        <div className={cx('text-quantity')}>Số lượng</div>
                        <button className={cx('qty-down')}>-</button>
                        <input id={cx('qty')} value={1} />
                        <button className={cx('qty-up')}>+</button>
                    </div>
                    <div className={cx('payment')}>
                        <button className={cx('btn-buy')}>Mua ngay</button>
                        <button className={cx('btn-addToCart')}>Thêm vào giỏ hàng</button>
                    </div>
                    <div className={cx('store-available')}>
                        <FontAwesomeIcon icon={faShop} className={cx('icon-commit')} />
                        Cửa hàng còn sản phẩm{' '}
                    </div>
                    <div className={cx('commit')}>
                        <span>
                            <FontAwesomeIcon icon={faCheck} className={cx('icon-commit')} />
                            Hàng chính hãng 100%
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faBackspace} className={cx('icon-commit')} />
                            Đổi ý miễn phí
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faTruck} className={cx('icon-commit')} />
                            Miễn phí vận chuyển
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx('description')}>
                <div className={cx('text-description')}>Mô tả sản phẩm</div>
                <div className={cx('content-description')}>
                    Chất liệu: Jean Kiểu dáng: Oversize Màu sắc: Xanh, Đen "Xanh & Đen", 2 gam màu đầy cá tính dành cho
                    các FRIENDs năng động. Chiếc nón Unisex vừa cập bến nhà TOTODAY chắc chắn sẽ không khiến các FRIENDs
                    thất vọng. Thiết kế sở hữu chất liệu Jean thoáng mát, thoải mái nhưng lại không lỗi thời, chắc chắn
                    sẽ là một item không thể thiếu trong tủ đồ của các FRIENDs.
                </div>
            </div>
        </div>
    );
}

export default Checkout;
