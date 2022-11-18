import React, { useState } from 'react';
import '../App';

import validateEmail from '../helpers/validateEmail';
import validateMessage from '../helpers/validateMessage';

function Contact(props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    // Check if the input value is empty

    // Verify and check each item
    switch (inputType) {
      case 'email':
        if (!validateMessage(inputValue)) {
          setErrorMessage('Email field cannot be empty');
        } else if (!validateEmail(inputValue)) {
          setErrorMessage('Not a valid email');
        } else {
          setErrorMessage('');
        }
        setEmail(inputValue);
        break;
      case 'name':
        if (!validateMessage(inputValue)) {
          setErrorMessage('Name field cannot be empty');
        } else {
          setErrorMessage('');
        }
        setName(inputValue);
        break;
      case 'message':
        if (!validateMessage(inputValue)) {
          setErrorMessage('Message field cannot be empty');
        } else {
          setErrorMessage('');
        }
        setMessage(inputValue);
        break;
      default:
        return;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Not a valid email');

      return;
    }
    if (!validateMessage(name)) {
      setErrorMessage('Name cannot be empty');

      return;
    }

    if (!validateMessage(message)) {
      setErrorMessage('Message cannot be empty');

      return;
    }

    setErrorMessage('');
    setEmail('');
    setMessage('');
    setName('');
  };

  // This is a form which has name, email and message to send. Also verifies email
  return (
    <div>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
