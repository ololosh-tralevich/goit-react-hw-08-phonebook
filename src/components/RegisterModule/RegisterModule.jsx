import { useState } from 'react';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import userOperations from '../../redux/userAccount/userAccount-operations';
// import {getUser} from '../../redux/userAccount/userAccount-selectors';

import style from './registerModule.module.css';

const RegisterModule = () => {
  const [userData, setUserData] = useState({
    'name': '',
    'email': '',
    'password': '',
  });

  // const globalState = useSelector(getUser, shallowEqual);
  // console.log(globalState);


  const dispatch = useDispatch();
  const userSignup = userData => dispatch(userOperations.signup(userData));

  const onChangeForm = ev => {
    const { name, value } = ev.target;
    setUserData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const submitForm = ev => {
    ev.preventDefault();
    // ev.target.reset()
    userSignup(userData);
  };

  return (
    <div className={style.registerCont}>
      <h3 className={style.regContTitle}>Registration</h3>
      <form className={style.registerForm} onSubmit={submitForm}>
        <label htmlFor="name">Your Name:</label>
        <input
          name="name"
          type="text"
          id="name"
          required
          onChange={onChangeForm}
        />

        <label htmlFor="email">Your Email:</label>
        <input
          name="email"
          // type="email"
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
        <button type="submit" className={style.sendFormBtn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default RegisterModule;
