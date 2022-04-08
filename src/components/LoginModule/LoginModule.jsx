import { useState } from 'react';

import style from './loginModule.module.css';

const LoginModule = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const onChangeForm = ev => {
    const { name, value } = ev.target;
    setUserData(prevState => {
      return { ...prevState, [name]: value };
    });
  };
  console.log(userData);
  return (
    <div className={style.loginCont}>
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
        <button className={style.formSubmitBtn} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginModule;
