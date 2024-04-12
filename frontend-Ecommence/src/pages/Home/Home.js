import Sliders from './components/Sliders';
import NewProduct from './components/NewProduct';
import FeaturedProduct from './components/FeaturedProduct';
import AllCategory from './components/AllCategory';
import FeaturedCategory from './components/FeaturedCategory';
import Collection from './components/Collection';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('Wrapper')}>
            <Sliders />
            <AllCategory />
            <NewProduct />
            <FeaturedProduct />
            <FeaturedCategory />
            <Collection />
        </div>
    );
}

export default Home;
