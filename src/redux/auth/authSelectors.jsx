const getIsLoggedin = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedin,
  getUsername,
};

export default authSelectors;