import style from './loginModule.module.css';

const LoginModule = () => {
  return (
    <form>
      <label htmlFor="email">Your Email:</label>
      <input name="email" type="email" id='email' />

      <label htmlFor="password">Your Password:</label>
      <input name="password" type="password" id='password' />
    </form>
  );
};

export default LoginModule;
