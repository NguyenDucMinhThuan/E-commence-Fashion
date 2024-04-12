import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { faCreditCard, faCube, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('privacy')}>
                <div className={cx('privacyItem')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon>
                    </div>
                    <div className={cx('privacyDetail')}>
                        <h5 className={cx('privacyText')}>Miễn phí vận chuyển</h5>
                        <h6 className={cx('privacyTextDetail')}>Miễn phí đơn hàng từ 500k</h6>
                    </div>
                </div>
                <div className={cx('privacyItem')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faCube}></FontAwesomeIcon>
                    </div>
                    <div className={cx('privacyDetail')}>
                        <h5 className={cx('privacyText')}>Đổi trả dễ dàng</h5>
                        <h6 className={cx('privacyTextDetail')}>Đổi trả hàng trong 60 ngày</h6>
                    </div>
                </div>
                <div className={cx('privacyItem')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    </div>
                    <div className={cx('privacyDetail')}>
                        <h5 className={cx('privacyText')}>Hỗ trợ 24/7</h5>
                        <h6 className={cx('privacyTextDetail')}>Gọi hotline để được tư vấn</h6>
                    </div>
                </div>
                <div className={cx('privacyItem')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                    </div>
                    <div className={cx('privacyDetail')}>
                        <h5 className={cx('privacyText')}>Thanh toán đa dạng</h5>
                        <h6 className={cx('privacyTextDetail')}>Nhiều phương thức thanh toán online</h6>
                    </div>
                </div>
            </div>
            <div className={cx('introduction')}>
                <div className={cx('introductionItem')}>
                    <h5 className={cx('introductionText')}>VỀ CATTUS</h5>
                    <h6 className={cx('introductionTextDetail')}>Giới thiệu</h6>
                    <h6 className={cx('introductionTextDetail')}>Liên hệ</h6>
                    <h6 className={cx('introductionTextDetail')}>Blogs</h6>
                </div>
                <div className={cx('line')}></div>
                <div className={cx('introductionItem')}>
                    <h5 className={cx('introductionText')}>HỖ TRỢ KHÁCH HÀNG</h5>
                    <h6 className={cx('introductionTextDetail')}>Hướng dẫn đặt hàng</h6>
                    <h6 className={cx('introductionTextDetail')}>Phương thức thanh toán</h6>
                    <h6 className={cx('introductionTextDetail')}>Chính sách thành viên</h6>
                    <h6 className={cx('introductionTextDetail')}>Chính sách tích -tiêu điểm</h6>
                </div>
                <div className={cx('line')}></div>
                <div className={cx('introductionItem')}>
                    <h5 className={cx('introductionText')}>CHÍNH SÁCH</h5>
                    <h6 className={cx('introductionTextDetail')}>Chính sách giao hàng</h6>
                    <h6 className={cx('introductionTextDetail')}>Chính sách đổi trả</h6>
                    <h6 className={cx('introductionTextDetail')}>Chính sách kiểm hàng</h6>
                    <h6 className={cx('introductionTextDetail')}>Chính sách bảo mật</h6>
                </div>
                <div className={cx('line')}></div>
                <div className={cx('introductionItem')}>
                    <h5 className={cx('introductionText')}>LIÊN HỆ</h5>
                    <h6 className={cx('introductionTextDetail')}>Hotline: 0942.222.428</h6>
                    <h6 className={cx('introductionTextDetail')}>Email: cskh@miucho.com</h6>
                    <h6 className={cx('introductionTextDetail')}>
                        Địa chỉ: 488/30 Phạm Văn Chiêu, P16, Q.Gò Vấp, TP HCM
                    </h6>
                </div>
                <div className={cx('line')}></div>
                <div className={cx('introductionItem')}>
                    <h5 className={cx('introductionText')}>Khác</h5>
                    <h6 className={cx('introductionTextDetail')}>Chúng tôi kết nối thanh toán qua MoMo</h6>
                    <h6 className={cx('introductionTextDetail')}>ĐĂNG KÝ NHẬN KHUYẾN MÃI</h6>
                    <h6 className={cx('introductionTextDetail')}>Kết nối với MIUCHO</h6>
                </div>
            </div>
            <div className={cx('company')}>Công ty TNHH PT XXX - MST:03xxxxx8</div>
        </div>
    );
}

export default Footer;
