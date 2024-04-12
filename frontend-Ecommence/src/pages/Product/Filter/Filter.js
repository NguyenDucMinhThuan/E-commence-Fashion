import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import RangeSlider from './RangeSlider';

const cx = classNames.bind(styles);

const Filter = ({ setShowFilter }) => {
    const [buttonsColor, setButtonsColor] = useState(false);
    const [buttonsSize, setButtonsSize] = useState(false);
    const [buttonsPrice, setButtonsPrice] = useState(false);
    const [colorStates, setColorStates] = useState({
        white: false,
        black: false,
        yellow: false,
        brown: false,
        red: false,
        gray: false,
        blue: false,
        green: false,
    });
    const [sizeStates, setSizeStates] = useState({
        M: false,
        L: false,
        XL: false,
    });
    const [value, setValue] = React.useState({ min: 0, max: 1000 });

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

    const toggleButtonColor = () => {
        setButtonsColor(!buttonsColor);
    };
    const toggleButtonSize = () => {
        setButtonsSize(!buttonsSize);
    };
    const toggleButtonPrice = () => {
        setButtonsPrice(!buttonsPrice);
    };

    const w3_close = () => {
        document.getElementById('mySidebar').style.display = 'none';
        document.getElementById('myOverlay').style.display = 'none';
        setShowFilter(false);
    };

    return (
        <div>
            <div className={cx('filter')}>
                <div className={cx('sidebar')} id="mySidebar" style={{ display: 'block' }}>
                    <h3 className={cx('text-filter')}>Lọc sản phẩm</h3>
                    <div className={cx('div-filter')}>
                        <button className={cx('btn-filter')} onClick={toggleButtonColor}>
                            Màu sắc
                        </button>
                        {buttonsColor ? (
                            <>
                                <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
                            </>
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                        )}
                        <div className={cx('input')} style={{ display: buttonsColor ? 'block' : 'none' }}>
                            <ul className={cx('ul')} style={{ flexWrap: 'wrap' }}>
                                <li className={cx('li-color')}>
                                    <div
                                        className={cx('div-checkbox-color', colorStates.white && 'checked-Color')}
                                        id="white"
                                        style={{ backgroundColor: 'white' }}
                                        onClick={() => checkColor('white')}
                                    ></div>
                                </li>
                                <li className={cx('li-color')}>
                                    <div
                                        className={cx('div-checkbox-color', colorStates.black && 'checked-Color')}
                                        id="black"
                                        style={{ backgroundColor: 'black' }}
                                        onClick={() => checkColor('black')}
                                    ></div>
                                </li>
                                <li className={cx('li-color')}>
                                    <div
                                        className={cx('div-checkbox-color', colorStates.yellow && 'checked-Color')}
                                        id="yellow"
                                        style={{ backgroundColor: 'yellow' }}
                                        onClick={() => checkColor('yellow')}
                                    ></div>
                                </li>
                                <li className={cx('li-color')}>
                                    <div
                                        className={cx('div-checkbox-color', colorStates.brown && 'checked-Color')}
                                        id="brown"
                                        style={{ backgroundColor: 'brown' }}
                                        onClick={() => checkColor('brown')}
                                    ></div>
                                </li>
                                <li className={cx('li-color')}>
                                    <div
                                        className={cx('div-checkbox-color', colorStates.red && 'checked-Color')}
                                        id="red"
                                        style={{ backgroundColor: 'red' }}
                                        onClick={() => checkColor('red')}
                                    ></div>
                                </li>
                                <li className={cx('li-color')}>
                                    <div
                                        className={cx('div-checkbox-color', colorStates.gray && 'checked-Color')}
                                        id="gray"
                                        style={{ backgroundColor: 'gray' }}
                                        onClick={() => checkColor('gray')}
                                    ></div>
                                </li>
                                <li className={cx('li-color')}>
                                    <div
                                        className={cx('div-checkbox-color', colorStates.blue && 'checked-Color')}
                                        id="blue"
                                        style={{ backgroundColor: 'blue' }}
                                        onClick={() => checkColor('blue')}
                                    ></div>
                                </li>
                                <li className={cx('li-color')}>
                                    <div
                                        className={cx('div-checkbox-color', colorStates.green && 'checked-Color')}
                                        id="green"
                                        style={{ backgroundColor: 'green' }}
                                        onClick={() => checkColor('green')}
                                    ></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('div-filter')}>
                        <button className={cx('btn-filter')} onClick={toggleButtonSize}>
                            Kích thước
                        </button>
                        {buttonsSize ? (
                            <>
                                <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
                            </>
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                        )}
                        <div className={cx('input')} style={{ display: buttonsSize ? 'block' : 'none' }}>
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
                    <div className={cx('div-filter')}>
                        <button className={cx('btn-filter')} onClick={toggleButtonPrice}>
                            Khoảng giá
                        </button>
                        {buttonsPrice ? (
                            <>
                                <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
                            </>
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                        )}
                        <div className={cx('input')} style={{ display: buttonsPrice ? 'block' : 'none' }}>
                            <div>
                                <RangeSlider min={0} max={1000} step={50} value={value} onChange={setValue} />
                                <div className={cx('price')}>
                                    <p>
                                        <span>{value.min}K</span>
                                    </p>
                                    <p>
                                        <span>{value.max}K</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={cx('btn-loc')} onClick={w3_close}>
                        Lọc
                    </button>
                </div>
                <div className={cx('overlay')} style={{ display: 'block' }} onClick={w3_close} id="myOverlay"></div>
            </div>
        </div>
    );
};

export default Filter;
