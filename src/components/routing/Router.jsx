import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Products from '../Products';
import Users from '../Users';
import ProductDetail from '../ProductDetail';
import UserDetail from '../UserDetail';
import Carts from '../Carts';
import CartDetails from '../CartDetails';   // ✅ import added
import Login from '../Login';
import SignUp from '../SignUp';

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
      {
        path: '/carts',
        element: <Carts />,
      },
      {
        path: '/carts/:id',          // ✅ new route added
        element: <CartDetails />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
]);

export default routes;
