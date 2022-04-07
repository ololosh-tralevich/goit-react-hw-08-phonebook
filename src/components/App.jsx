import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

//  Добавить Lazy ! ! !
import LayoutPage from '../pages/LayoutPage/LayoutPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

const App = () => {
  return (
    <>
      <Suspense fallback={<div className="ldsDualRing">loading</div>}>
        <Routes>
          <Route path="/" exact element={<LayoutPage />}>
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
