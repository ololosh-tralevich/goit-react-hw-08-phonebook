import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { userOperations } from '../redux/userAccount/userAccount-operations';
import PrivateRoute from '../shared/Components/PrivateRoute';
import PublicRoute from '../shared/Components/PublicRoute';

import LayoutPage from '../pages/LayoutPage/LayoutPage';
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const getCurrentUser = () => userOperations.currentUser();

  useEffect(() => {
    dispatch(getCurrentUser());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Suspense fallback={<div className="ldsDualRing"></div>}>
        <Routes>
          <Route path="/" exact element={<LayoutPage />}>
            <Route index element={<Navigate to="/contacts" />} />
            <Route element={<PublicRoute />}>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="contacts" element={<ContactsPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="contacts" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
