import { NavLink } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import {
  getUser,
  getLoading,
  getIsLogin,
} from '../../redux/userAccount/userAccount-selectors';

import { userOperations } from '../../redux/userAccount/userAccount-operations';

import style from './headerModule.module.css';

const linkClassName = ({ isActive }) => {
  return isActive ? style.activeHeaderLink : style.headerLink;
};

const HeaderModule = () => {
  const userData = useSelector(getUser, shallowEqual);
  const isLogin = useSelector(getIsLogin, shallowEqual);
  const loading = useSelector(getLoading, shallowEqual);

  const dispatch = useDispatch();
  const userLogout = () => dispatch(userOperations.logout());

  const logoutBtn = () => {
    userLogout();
  };

  return (
    <ul className={style.headerLinksList}>
      <li className={style.headerLinkContacts}>
        <NavLink to="/contacts" className={linkClassName}>
          Contacts
        </NavLink>
      </li>
      {isLogin ? (
        <li className={style.userProfileItem}>
          <div className={style.userProfileMainBlock}>
            <p>Your Profile</p>
            <div className={style.userProfileBlock}>
              {!loading || <div className={style.ldsDualRing}></div>}
              <h2>Your Profile</h2>
              <p className={style.userName}>{userData.name}</p>
              <p className={style.userEmail}>{userData.email}</p>
              <button className={style.logoutBtn} onClick={logoutBtn}>
                logout
              </button>
            </div>
          </div>
        </li>
      ) : (
        <>
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
        </>
      )}

      {/* {isLogin ? (
        <li>111111111111111111111111</li>
      ) : (
        <li>2222222222222222222222222</li>
      )} */}
    </ul>
  );
};

export default HeaderModule;
