import { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { userOperations } from '../../redux/userAccount/userAccount-operations';
import {
  getLoading,
  getError,
} from '../../redux/userAccount/userAccount-selectors';

import style from './loginModule.module.css';

const LoginModule = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const loading = useSelector(getLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);

  const dispatch = useDispatch();
  const userLogin = userData => userOperations.login(userData);

  const onChangeForm = ev => {
    const { name, value } = ev.target;
    setUserData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmit = ev => {
    ev.preventDefault();
    // ev.target.reset()
    dispatch(userLogin(userData));
  };

  return (
    <>
      <div className={style.loginCont}>
        {!loading || <div className={style.ldsDualRing}></div>}
        <h3 className={style.loginContTilte}>Log In</h3>
        <form className={style.loginForm}>
          <label htmlFor="email">Your Email:</label>
          <input
            name="email"
            type="email"
            id="email"
            required
            onChange={onChangeForm}
          />

          <label htmlFor="password">Your Password:</label>
          <input
            name="password"
            type="password"
            id="password"
            required
            onChange={onChangeForm}
          />
          <button
            className={style.formSubmitBtn}
            type="submit"
            onClick={formSubmit}
          >
            Log In
          </button>
        </form>
      </div>
      {!error || <h2 style={{ margin: '20px' }}>Something went wrong...</h2>}
    </>
  );
};

export default LoginModule;
