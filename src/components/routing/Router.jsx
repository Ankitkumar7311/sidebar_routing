import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Products from '../Products';
import Users from '../Users';
import ProductDetail from '../ProductDetail';
import UserDetail from '../UserDetail';

let routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/:id',
        element: <UserDetail />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
    ],
  },
]);

export default routes;
