import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Product from '~/pages/Product';
import DetailProduct from '~/pages/DetailProduct';
import Checkout from '~/pages/Checkout';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, layout: HeaderOnly },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.product, component: Product },
    { path: config.routes.detailProduct, component: DetailProduct, layout: HeaderOnly },
    { path: config.routes.checkout, component: Checkout, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
