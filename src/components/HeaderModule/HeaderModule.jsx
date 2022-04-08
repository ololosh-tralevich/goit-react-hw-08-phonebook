import { NavLink } from 'react-router-dom';

import style from './headerModule.module.css';

const linkClassName = ({ isActive }) => {
  return isActive ? style.activeHeaderLink : style.headerLink;
};

const HeaderModule = () => {
  return (
    <ul className={style.headerLinksList}>
      <li className={style.headerLinksItem}>
        <NavLink to="/contacts" className={linkClassName}>
          Contacts
        </NavLink>
      </li>
      <li className={style.headerLinksItem}>
        <NavLink to="/login" className={linkClassName}>
          Log In
        </NavLink>
      </li>
      <li className={style.headerLinksItem}>
        <NavLink to="/register" className={linkClassName}>
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderModule;
