import React, { useState } from 'react';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faCircleHalfStroke,
    faEarthAsia,
    faEllipsisVertical,
    faExpand,
    faSignOut,
    // faKeyboard,
    // faGear,
    // faCircleQuestion,
    // faCoins,
    // faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
// import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import Cart from '~/pages/Cart';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    // {
    //     icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    //     title: 'Feedback and help',
    //     to: '/feedback',
    // },
    // {
    //     icon: <FontAwesomeIcon icon={faKeyboard} />,
    //     title: 'Keyboard shortcuts',
    // },
];

function Header() {
    const currentUser = true;
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        // {
        //     icon: <FontAwesomeIcon icon={faUser} />,
        //     title: 'View profile',
        //     to: '/@hoaa',
        // },
        // {
        //     icon: <FontAwesomeIcon icon={faCoins} />,
        //     title: 'Get coins',
        //     to: '/coin',
        // },
        // {
        //     icon: <FontAwesomeIcon icon={faGear} />,
        //     title: 'Settings',
        //     to: '/settings',
        // },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            {showCart ? <Cart setShowCart={setShowCart} /> : null}

            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <h2 className={cx('nameBrand')}>Cattus</h2>
                </Link>
                <div className={cx('menu-category')}>
                    <Link to={config.routes.product}>
                        <h3 className={cx('menu-item')}>Bán chạy</h3>
                    </Link>
                    <Link to={config.routes.product}>
                        <h3 className={cx('menu-item')}>Mới nhất</h3>
                    </Link>
                    <Link to={config.routes.product}>
                        <h3 className={cx('menu-item')}>Khuyễn mãi</h3>
                    </Link>
                    <Link to={config.routes.product}>
                        <h3 className={cx('menu-item')}>Sản Phẩm</h3>
                    </Link>
                </div>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Toàn màn hình" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faExpand} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Sáng/Tối" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCircleHalfStroke} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Giỏ Hàng" placement="bottom">
                                <button className={cx('action-btn')} onClick={toggleCart}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <span className={cx('badge')}>4</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            {/* <Button text>Upload</Button> */}
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFgwaH5dkVQDnUfraUuMhpXso2H55p0AlGyjYfnmnQCUdabf72_8iLKmaYJTdwWetABr8qcsoY3q5zA73mUpT3X&_nc_ohc=lgPgvpBXJWAAX_Agl4p&_nc_ht=scontent.fsgn2-10.fna&oh=00_AfCoi9R___-mQBvqw936WHzdHqcV6bGoodLIHCyJJlVYHg&oe=6628ACF8"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
