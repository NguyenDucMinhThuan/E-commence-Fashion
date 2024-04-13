// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';

import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Cart = ({ setShowCart }) => {
    const w3_close = () => {
        document.getElementById('mySidebar').style.display = 'none';
        document.getElementById('myOverlay').style.display = 'none';
        setShowCart(false);
    };

    return (
        <div className={cx('Cart')}>
            <div className={cx('sidebar')} id="mySidebar" style={{ display: 'block' }}>
                <h3 className={cx('text-Cart')}>
                    <FontAwesomeIcon icon={faCartShopping} className={cx('icon')}></FontAwesomeIcon> Hiện đang có
                    <span className={cx('total-qty')}>2</span> sản phẩm trong giỏ hàng
                </h3>
                <div className={cx('headline')}>
                    <div className={cx('product-text')}>Sản phẩm</div>
                    <div className={cx('headline-text')}>Số lượng</div>
                    <div className={cx('headline-text')}>Thành tiền</div>
                </div>
                <div className={cx('product')}>
                    <div className={cx('product-item')}>
                        <div className={cx('product-info')}>
                            <div className={cx('product-name')}>ÁO KHOÁC U1AKD04401FONBA - BL - M</div>{' '}
                            <div className={cx('product-action')}>
                                <div className={cx('product-price')}>450,000đ</div>
                                <div className={cx('product-remove')}>
                                    <FontAwesomeIcon icon={faTrash} className={cx('icon-trash')}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                        <div className={cx('quantity')}>
                            <button className={cx('qty-down')}>-</button>
                            <input id={cx('qty')} value={1} />
                            <button className={cx('qty-up')}>+</button>
                        </div>
                        <div className={cx('final-price')}>450,000đ</div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('product-info')}>
                            <div className={cx('product-name')}>ÁO KHOÁC U1AKD04401FONBA - BL - M</div>{' '}
                            <div className={cx('product-action')}>
                                <div className={cx('product-price')}>450,000đ</div>
                                <div className={cx('product-remove')}>
                                    <FontAwesomeIcon icon={faTrash} className={cx('icon-trash')}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                        <div className={cx('quantity')}>
                            <button className={cx('qty-down')}>-</button>
                            <input id={cx('qty')} value={1} />
                            <button className={cx('qty-up')}>+</button>
                        </div>
                        <div className={cx('final-price')}>450,000đ</div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('product-info')}>
                            <div className={cx('product-name')}>ÁO KHOÁC U1AKD04401FONBA - BL - M</div>{' '}
                            <div className={cx('product-action')}>
                                <div className={cx('product-price')}>450,000đ</div>
                                <div className={cx('product-remove')}>
                                    <FontAwesomeIcon icon={faTrash} className={cx('icon-trash')}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                        <div className={cx('quantity')}>
                            <button className={cx('qty-down')}>-</button>
                            <input id={cx('qty')} value={1} />
                            <button className={cx('qty-up')}>+</button>
                        </div>
                        <div className={cx('final-price')}>450,000đ</div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('product-info')}>
                            <div className={cx('product-name')}>ÁO KHOÁC U1AKD04401FONBA - BL - M</div>{' '}
                            <div className={cx('product-action')}>
                                <div className={cx('product-price')}>450,000đ</div>
                                <div className={cx('product-remove')}>
                                    <FontAwesomeIcon icon={faTrash} className={cx('icon-trash')}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                        <div className={cx('quantity')}>
                            <button className={cx('qty-down')}>-</button>
                            <input id={cx('qty')} value={1} />
                            <button className={cx('qty-up')}>+</button>
                        </div>
                        <div className={cx('final-price')}>450,000đ</div>
                    </div>
                </div>

                <div className={cx('payment')}>
                    <div className={cx('total')}>
                        Tổng cộng: <span className={cx('total-price')}>600,000đ</span>
                    </div>
                    <Link to={config.routes.checkout}>
                        <button className={cx('btn-loc')} onClick={w3_close}>
                            Đặt hàng
                        </button>
                    </Link>
                </div>
            </div>
            <div className={cx('overlay')} style={{ display: 'block' }} onClick={w3_close} id="myOverlay"></div>
        </div>
    );
};

export default Cart;
