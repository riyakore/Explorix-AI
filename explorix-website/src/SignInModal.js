import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Suppresses modal accessibility warnings

function SignInModal({ isOpen, onRequestClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Here you would typically handle backend authentication
    onRequestClose(); // Close modal after submit
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Sign In Modal">
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label>
        <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} /></label>
        <label>Password: <input type="password" name="password" value={formData.password} onChange={handleChange} /></label>
        <button type="submit">Sign In</button>
      </form>
    </Modal>
  );
}

export default SignInModal;