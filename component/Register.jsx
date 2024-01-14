import React, { useState } from 'react';
import './Register.css'

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const [firstNameWarning, setFirstNameWarning] = useState('');
  const [lastNameWarning, setLastNameWarning] = useState('');
  const [emailWarning, setEmailWarning] = useState('');
  const [confirmEmailWarning, setConfirmEmailWarning] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (firstName === '') {
      setFirstNameWarning('First name is required!');
    } else {
      setFirstNameWarning('');
    }

    if (lastName === '') {
      setLastNameWarning('Last name is required!');
    } else {
      setLastNameWarning('');
    }

    if (email === '') {
      setEmailWarning('Email is required!');
    } else if (!email.includes('@')) {
      setEmailWarning('Email does not contain "@"');
    } else {
      setEmailWarning('');
    }

    if (confirmEmail === '') {
      setConfirmEmailWarning('Please enter your email again!');
    } else if (email !== confirmEmail) {
      setConfirmEmailWarning('Email should be the same!');
    } else {
      setConfirmEmailWarning('');
    }
  }

  function handleInputChange(inputName, value) {
    switch (inputName) {
      case 'firstName':
        setFirstName(value);
        setFirstNameWarning('');
        break;
      case 'lastName':
        setLastName(value);
        setLastNameWarning('');
        break;
      case 'email':
        setEmail(value);
        setEmailWarning('');
        break;
      case 'confirmEmail':
        setConfirmEmail(value);
        setConfirmEmailWarning('');
        break;
      default:
        break;
    }
  }

  const handleButtonClick = () => {
    console.log('Form saved!');
  };

  return (
    <div className='form'>
      <form className='main-form' onSubmit={handleSubmit}>
        <h2 className='form-title'>Register Form</h2>
        <div className='form-field'>
          <label htmlFor='first-name'>First Name*:</label>
          <div className='input-box'>
            <input
              className='first-name'
              id='first-name'
              type='text'
              name='first-name'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
            />
          </div>
          <p className='first-name-warning'>{firstNameWarning}</p>
        </div>
        <div className='form-field'>
          <label htmlFor='last-name'>Last Name*:</label>
          <div className='input-box'>
            <input
              className='last-name'
              id='last-name'
              type='text'
              name='last-name'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              required
            />
          </div>
          <p className='last-name-warning'>{lastNameWarning}</p>
        </div>
        <div className='form-field'>
          <label htmlFor='tier'>Preferred pronouns: </label>
          <select id='tier' className='tier'>
            <option value='1'>Her/She</option>
            <option value='2'>Him/He</option>
            <option value='3'>They/Them</option>
          </select>
        </div>
        <div className='form-field'>
          <label htmlFor='email'>Email*:</label>
          <div className='input-box'>
            <input
              className='email'
              id='email'
              type='text'
              name='email'
              placeholder='youremail@email.com'
              value={email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>
          <p className='email-warning'>{emailWarning}</p>
        </div>
        <div className='form-field'>
          <label htmlFor='confirm-email'>Confirm Email*:</label>
          <div className='input-box'>
            <input
              className='confirm-email'
              id='confirm-email'
              type='text'
              name='confirm-email'
              placeholder='youremail@email.com'
              value={confirmEmail}
              onChange={(e) => handleInputChange('confirmEmail', e.target.value)}
              required
            />
          <p className='confirm-email-warning'>{confirmEmailWarning}</p>
          </div>
        </div>
        <div className='form-check'>
          <label htmlFor='checkbox'>Remember me</label>
          <input
            type='checkbox'
            id='checkbox'
            name='checkbox'
            defaultChecked
          />
        </div>
        <div className='button-container'>
          <button
            className='form-button'
            type='submit'
            onClick={handleButtonClick}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
