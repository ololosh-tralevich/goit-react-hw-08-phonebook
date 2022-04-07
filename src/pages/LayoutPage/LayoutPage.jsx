import { Outlet } from 'react-router-dom';

import HeaderModule from '../../components/HeaderModule/HeaderModule';

// import style from './layoutPage.module.css';

const LayoutPage = () => {
  return (
    <>
      <header>
        <HeaderModule />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutPage;
