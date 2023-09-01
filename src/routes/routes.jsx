import { home, about } from '../config/routes';
import Home from '../pages/Home';
import About from '../pages/About';
import { DefaultLayout } from '../layouts';
const publicRoutes = [
   { path: home, component: Home, layout: DefaultLayout },
   { path: about, component: About, layout: DefaultLayout },
];

// need to sign in to access routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
