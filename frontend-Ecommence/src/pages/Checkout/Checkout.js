// import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import Image from '~/components/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faTag } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Checkout() {
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('headline')}>
                <div className={cx('headline-item')}>
                    <div className={cx('step')}>1</div>
                    <div className={cx('step-text')}>Giỏ hàng</div>
                </div>
                <div className={cx('line')}></div>
                <div className={cx('headline-item')}>
                    <div className={cx('step')}>2</div>
                    <div className={cx('step-text')}>Đặt hàng</div>
                </div>
                <div className={cx('line')}></div>
                <div className={cx('headline-item')}>
                    <div className={cx('step')}>3</div>
                    <div className={cx('step-text')}>Xác nhận</div>
                </div>
            </div>
            <div className={cx('order')}>
                <div className={cx('order-title')}>
                    <div className={cx('order-title-text')}>ĐẶT HÀNG</div>
                    <div className={cx('order-title-checklogin')}>
                        Bạn đã có tài khoản?
                        <span className={cx('order-title-login')}>Đăng nhập ngay</span>
                    </div>
                </div>
                <div className={cx('information')}>
                    <div className={cx('info-customer')}>
                        <div className={cx('info-customer-text')}>Thông tin nhận hàng</div>
                        <div className={cx('info-name')}>
                            <label>Họ tên</label>
                            <input className={cx('input-hoten')} placeholder="Họ tên" />
                        </div>
                        <div className={cx('email-sdt')}>
                            <div>
                                <label>Số điện thoại</label>
                                <input className={cx('input-sdt')} placeholder="Số điện thoại" />
                            </div>
                            <div>
                                <label>Email</label>
                                <input className={cx('input-email')} placeholder="Email" />
                            </div>
                        </div>
                        <div className={cx('')}>
                            <label>Địa chỉ nhận hàng</label>
                            <input className={cx('input-address')} placeholder="Địa chỉ nhận hàng" />
                        </div>
                        <div className={cx('detail-address')}>
                            <div className={cx('city')}>
                                <label>Tỉnh / Thành phố</label>
                                <input className={cx('input-city')} placeholder="Tỉnh / Thành phố" />
                            </div>
                            <div className={cx('district')}>
                                <label>Quận / Huyện</label>
                                <input className={cx('input-district')} placeholder="Quận / Huyện" />
                            </div>
                            <div className={cx('ward')}>
                                <label>Phường / Xã</label>
                                <input className={cx('input-ward')} placeholder="Phường / Xã" />
                            </div>
                        </div>
                        <div className={cx('')}>
                            <label>Ghi chú</label>
                            <input className={cx('input-note')} placeholder="Ghi chú" />
                        </div>
                    </div>
                    <div className={cx('info-product')}>
                        <div className={cx('header-product')}>
                            <div className={cx('info-product-text')}>
                                <div className={cx('')}>Thông tin đơn hàng</div>
                                <button className={cx('btn-change')}>Sửa</button>
                            </div>
                            <div className={cx('product-name')}>
                                NÓN BUCKET A2NBK01305 - BU <div>x1</div>
                            </div>
                            <div className={cx('discount')}>
                                <FontAwesomeIcon icon={faTag} className={cx('icon-discount')}></FontAwesomeIcon>
                                Chọn hoặc nhập mã giảm giá
                            </div>
                            <div className={cx('price')}>
                                <div className={cx('price-text')}>
                                    <p>Tổng tiền hàng</p> <span className={cx('price-product')}>150,000đ</span>
                                </div>
                                <div className={cx('price-text')}>
                                    <p>Phí vận chuyển</p> <span className={cx('price-trasport')}>0đ</span>
                                </div>
                            </div>
                            <div className={cx('coupon')}>
                                <p>Giảm giá coupon</p>
                                <span>0đ</span>
                            </div>
                            <div className={cx('total')}>
                                <p>Tạm tính</p>
                                <span className={cx('total-price')}>150,000đ</span>
                            </div>
                            <p>(Đã bao gồm VAT nếu có)</p>
                        </div>
                        <button className={cx('btn-done')}>Hoàn tất</button>
                    </div>
                </div>
            </div>
            <div className={cx('payment-wrapper')}>
                <div className={cx('payment')}>Phương thức thanh toán</div>
                <div className={cx('cod')}>
                    <FontAwesomeIcon icon={faCircleDot} className={cx('cod-icon')}></FontAwesomeIcon>
                    <div className={cx('cod-logo')}>
                        <Image
                            className={cx('cod-image')}
                            src="https://web.nvnstatic.net/tp/T0441/img/cod.svg?v=3"
                            alt="COD"
                        />
                    </div>
                    <div className={cx('cod-text')}>COD(Thanh toán khi nhận hàng)</div>
                </div>
                <div className={cx('momo')}>
                    <FontAwesomeIcon icon={faCircleDot} className={cx('momo-icon')}></FontAwesomeIcon>

                    <div className={cx('momo-logo')}>
                        <Image
                            className={cx('momo-image')}
                            src="https://web.nvnstatic.net/img/logo_momo.png?v=2"
                            alt="Momo"
                        />
                    </div>
                    <div className={cx('momo-text')}>Thanh toán qua momo</div>
                </div>
                <div className={cx('banking')}>
                    <FontAwesomeIcon icon={faCircleDot} className={cx('banking-icon')}></FontAwesomeIcon>

                    <div className={cx('banking-logo')}>
                        <Image
                            className={cx('banking-image')}
                            src="https://web.nvnstatic.net/tp/T0441/img/vnpay.svg?v=3"
                            alt="Internet Banking"
                        />
                    </div>
                    <div className={cx('banking-text')}>Thanh toán qua ngân hàng(Internet Banking)</div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
