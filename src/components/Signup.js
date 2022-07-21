import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setLocalStorage } from '../logics/localStore';
import userURL from '../logics/urls';
import { fetchUsers, postUser } from '../redux/user/user';

const Signup = () => {
  const store = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [statusMessage, setStatusMessage] = useState('');
  const [emailStatus, setEmailStatus] = useState('');

  const signup = (user) => {
    fetch(userURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'SUCCESS') {
          dispatch(postUser(user));
          const localData = { user_id: user.id, loggedIn: true };
          setLocalStorage(localData);
          navigate('/');
        }
        return data;
      });
  };

  const signupUser = () => {
    if (password === confirmPass) {
      const data = {
        name, email, password, id: new Date().getTime().toString(),
      };
      signup(data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = { error: 'Email Exists' };
    try {
      if (store.length !== 0) {
        store.forEach((storeUser, index) => {
          if (email === storeUser.email) {
            setEmailStatus('Email Already Exists');
            throw error;
          }
          if (store.length === 0 || index === store.length - 1) {
            signupUser();
          }
        });
      } else {
        signupUser();
      }
    } catch (e) {
      if (e !== error) throw e;
    }
  };

  const verifyPassword = (confirmPassword, password) => {
    if (confirmPassword === '' || password === '') {
      setPasswordConfirmation(true);
      setStatusMessage('');
    } else if (confirmPassword === password) {
      setPasswordConfirmation(true);
      setStatusMessage('Password Matched');
    } else {
      setPasswordConfirmation(false);
      setStatusMessage('Password not matched');
    }
  };

  const handleInput = (e) => {
    const input = e.target;
    const inputValue = input.value;
    if (input.name === 'name') {
      setName(inputValue);
      return name;
    } if (input.name === 'email') {
      setEmail(inputValue);
      return email;
    } if (input.name === 'password') {
      setPassword(inputValue);
      verifyPassword(inputValue, confirmPass);
    } else if (input.name === 'confirm-password') {
      setConfirmPass(inputValue);
      setPasswordConfirmation(verifyPassword(inputValue));
      verifyPassword(inputValue, password);
    }
    return inputValue;
  };

  useEffect(() => {
    if (store.length === 0) {
      dispatch(fetchUsers());
    }
  }, []);

  return (
    <section className="authentication-section">
      <h1 className="register-page-heading">Sign Up</h1>
      <form id="registeration-form" onSubmit={handleSubmit}>
        <input onChange={handleInput} className="input-field" type="text" name="name" id="signup-name-field" placeholder="Full Name" required minLength="8" maxLength="100" />
        <input onChange={handleInput} className="input-field" type="email" name="email" id="signup-email-field" placeholder="Email" required />
        <input onChange={handleInput} className="input-field" type="password" name="password" id="signup-password-confirmation-field" placeholder="Password" required minLength="8" />
        <input onChange={handleInput} onFocus={(e) => verifyPassword(e.target.value, password)} className={passwordConfirmation ? 'input-field' : 'input-field input-field-red'} type="password" name="confirm-password" id="signup-password-field" placeholder="Confirm Password" minLength="8" required />
        <small className="register-form-error-msg">{emailStatus}</small>
        <small className={passwordConfirmation ? 'register-form-success-msg' : 'register-form-error-msg'}>{statusMessage}</small>
        <p className="register-to-login">
          Already a member?
          <NavLink className="register-to-login-link" to="/login">Login</NavLink>
        </p>
        <button className="form-submit-btn" type="submit">Signup</button>
      </form>
    </section>
  );
};

export default Signup;
