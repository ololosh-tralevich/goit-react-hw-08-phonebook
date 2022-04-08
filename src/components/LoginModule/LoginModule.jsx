import style from './loginModule.module.css';

const LoginModule = () => {
  return (
    <div className={style.loginCont}>
      <h3 className={style.loginContTilte}>Log In</h3>
      <form className={style.loginForm}>
        <label htmlFor="email">Your Email:</label>
        <input name="email" type="email" id="email" required/>

        <label htmlFor="password">Your Password:</label>
        <input name="password" type="password" id="password" required/>
        <button className={style.formSubmitBtn} type='submit'>Log In</button>
      </form>
    </div>
  );
};

export default LoginModule;
