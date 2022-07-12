import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setLocalStorage } from '../logics/localStore';
import { fetchUsers } from '../redux/user/user';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const store = useSelector((store) => store.userReducer);

  const authenticateUser = (user) => {
    const error = { error: 'User not found' };
    try {
      store.forEach((storeUser, index) => {
        if (user.email === storeUser.email && user.password === storeUser.password) {
          setErrorMsg('');
          setLocalStorage({ user_id: storeUser.id, loggedIn: true });
          navigate('/');
          throw error;
        } if (index === store.length - 1) {
          if (user.email !== storeUser.email || user.password !== storeUser.password) {
            setErrorMsg('Invalid User');
            throw error;
          }
        }
      });
    } catch (e) {
      if (e !== error) throw e;
    }
    return user;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser({ email, password });
  };

  const handleInput = (e) => {
    const inputField = e.target;
    const inputValue = inputField.value;
    if (inputField.name === 'email') {
      setEmail(inputValue);
    } else if (inputField.name === 'password') {
      setPassword(inputValue);
    }
    setErrorMsg('');
    return inputValue;
  };

  useEffect(() => {
    if (store.length === 0) {
      dispatch(fetchUsers());
    }
  }, []);
  return (
    <section className="authentication-section">
      <h1 className="login-page-heading">Login</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <input onChange={handleInput} className="input-field" type="email" name="email" id="signup-email-field" placeholder="Email" required />
        <input onChange={handleInput} className="input-field" type="password" name="password" id="login-password-field" placeholder="Password" required />
        <small className="register-form-error-msg">{errorMsg}</small>
        <span className="login-to-register">
          Not a member?
          <NavLink className="login-to-register-link" to="/registeration">Register</NavLink>
        </span>
        <input onChange={handleInput} className="form-submit-btn" type="submit" value="Login" />
      </form>
    </section>
  );
};

export default Login;
