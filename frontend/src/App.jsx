import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit', formData);
      console.log(response.data);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to submit form');
    }
  };

  return (
    <body className='bg-stone-500'>
      <div><h1 className='text-4xl mt-8 text-center bg-blue-300 ' >Startup Thiruvizha</h1>
      </div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
    </body>
  );
};

export default App;
