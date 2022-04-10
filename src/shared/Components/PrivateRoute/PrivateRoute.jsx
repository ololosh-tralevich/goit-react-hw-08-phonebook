import { Outlet, Navigate } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';

import { getIsLogin } from '../../../redux/userAccount/userAccount-selectors';

const PrivateRoute = () => {
  const isLogin = useSelector(getIsLogin, shallowEqual);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
