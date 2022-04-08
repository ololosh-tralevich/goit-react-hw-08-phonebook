import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const addToken = token => {
  axios.defaults.headers.common.Autorization = `Bearer ${token}`;
};

const signup = async userData => {
    console.log(userData)
  const { data: result } = await axios.post('/users/signup', userData);
  console.log('REG', result);
  addToken(result.token);
  return result;
};

const login = async userData => {
  const { data: result } = await axios.post('users/login', userData);
  addToken(result.token);
  console.log('LogIn', result);
  return result;
};

const logout = async userData => {
  const { data: result } = await axios.post('users/logout', userData);
  console.log('Logout', result);
  return result;
};

const currentUser = async token => {
  addToken(token);
  const { data: result } = await axios.get('users/current');
  return result;
};

const userApi = {
  signup,
  login,
  logout,
  currentUser,
};

export default userApi;
