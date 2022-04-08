import style from './registerModule.module.css';

const RegisterModule = () => {
  return (
    <div className={style.registerCont}>
      <h3 className={style.regContTitle}>Registration</h3>
      <form className={style.registerForm}>
        <label htmlFor="name">Your Name:</label>
        <input name="name" type="text" id="name" required />

        <label htmlFor="email">Your Email:</label>
        <input name="email" type="email" id="email" required />

        <label htmlFor="password">Your Password:</label>
        <input name="password" type="password" id="password" required />
        <button type="submit" className={style.sendFormBtn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default RegisterModule;
