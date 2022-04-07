import style from './registerModule.module.css';

const RegisterModule = () => {
  return (
    <form>
        <label htmlFor='name'>Your Name:</label>
      <input name='name' type="text" id='name'/>

      <label htmlFor='email'>Your Email:</label>
      <input name='email' type="email" id='email'/>

      <label htmlFor='password'>Your Password:</label>
      <input name='password' type="password" id='password'/>
    </form>
  );
};

export default RegisterModule;