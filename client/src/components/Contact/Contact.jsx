import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.fullName || !formData.email || !formData.message) {
      alert('Please fill out all fields');
      return;
    }

    // Send form data to server
    fetch('/users/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setFormData({ fullName: '', email: '', message: '' }); 
        setShowModal(true); // Show modal
        console.log('Response from server:', data);
      })
      .catch(error => {
        console.error('Error sending data:', error);
        alert('Failed to submit form. Please try again.');
      });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div id='contact' className='container'>
      <div className='content'>
        <h1 className='title'>Contact Me</h1>
        <form onSubmit={handleSubmit} className='form' action='/users/contact' method='post'>
          <div className='form-group'>
            <label className='label' htmlFor='fullName'>Full Name</label>
            <input
              className='input'
              type='text'
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              placeholder=' Your Name'
            />
          </div>
          <div className='form-group'>
            <label className='label' htmlFor='email'>Email Address</label>
            <input
              className='input'
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder=' Your Email address'
            />
          </div>
          <div className='form-group'>
            <label className='label' htmlFor='message'>Message</label>
            <textarea
              className='textarea'
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder=' Your Message'
            ></textarea>
          </div>
          <button className='button' type='submit'>Submit</button>
        </form>
      </div>
      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <p>Your response was sent successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
