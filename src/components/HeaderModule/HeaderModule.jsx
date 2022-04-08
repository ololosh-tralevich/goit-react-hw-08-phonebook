import { NavLink } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import {
  getUser,
  // getIsLogin,
  getUserToken,
} from '../../redux/userAccount/userAccount-selectors';

import { userOperations } from '../../redux/userAccount/userAccount-operations';

import style from './headerModule.module.css';

const linkClassName = ({ isActive }) => {
  return isActive ? style.activeHeaderLink : style.headerLink;
};

const HeaderModule = () => {
  const userData = useSelector(getUser, shallowEqual);
  // console.log(userData);
  // const isLogin = useSelector(getIsLogin, shallowEqual);
  const userToken = useSelector(getUserToken, shallowEqual);

  const dispatch = useDispatch();
  const userLogout = userToken => dispatch(userOperations.logout(userToken));

  const logoutBtn = () => {
    userLogout(userToken);
  };

  return (
    <ul className={style.headerLinksList}>
      {/* {!isLogin || <li className={style.userProfileItem}>
        <div className={style.userProfileMainBlock}>
          <p>Your Profile</p>
          <div className={style.userProfileBlock}>
            <h2>Your Profile</h2>
            <p className={style.userName}>{userData.name}</p>
            <p className={style.userEmail}>{userData.email}</p>
            <button className={style.logoutBtn}>logout</button>
          </div>
        </div>
      </li>} */}
      <li className={style.userProfileItem}>
        <div className={style.userProfileMainBlock}>
          <p>Your Profile</p>
          <div className={style.userProfileBlock}>
            <h2>Your Profile</h2>
            <p className={style.userName}>{userData.name}</p>
            <p className={style.userEmail}>{userData.email}</p>
            <button className={style.logoutBtn} onClick={logoutBtn}>
              logout
            </button>
          </div>
        </div>
      </li>
      <li className={style.headerLinkContacts}>
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
