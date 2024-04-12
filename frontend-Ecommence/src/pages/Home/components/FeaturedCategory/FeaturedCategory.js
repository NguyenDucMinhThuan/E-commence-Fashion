import BeltCategory from './BeltCategory';
import SockCategory from './SockCategory';
import WalletCategory from './WalletCategory';
import CapCategory from './CapCategory';

import classNames from 'classnames/bind';
import styles from './FeaturedCategory.module.scss';

const cx = classNames.bind(styles);

function FeaturedCategory() {
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('Men')}>
                <CapCategory />
                <BeltCategory />
            </div>
            <div className={cx('Women')}>
                <SockCategory />
                <WalletCategory />
            </div>
        </div>
    );
}

export default FeaturedCategory;
