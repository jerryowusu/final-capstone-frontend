export const setLocalStorage = (user) => (
  localStorage.setItem('user_logged_in', JSON.stringify(user))
);

export const getLocalStorage = () => (
  JSON.parse(localStorage.getItem('user_logged_in'))
);

export default 'Working';
