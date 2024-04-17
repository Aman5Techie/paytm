const url = "http://localhost:3000/api/v1";

const signup = `${url}/user/signup`;
const signin = `${url}/user/login`;
const user_info = `${url}/user/userinfo`;
const balance_url = `${url}/account/balance`;
const all_users = `${url}/user/bulk`;
const transfer = `${url}/account/transfer`;

export { signup, signin, user_info, balance_url, all_users, transfer };
