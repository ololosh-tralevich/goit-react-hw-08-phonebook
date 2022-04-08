export const getGlobalStore = ({ user }) => user;
export const getUser = ({ user }) => user.user;
export const getIsLogin = ({ user }) => user.isLogin;
export const getLoading = ({ user }) => user.loading;
export const getError = ({user}) => user.error;
