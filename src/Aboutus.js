import React, { useState } from 'react';
import './Aboutus.css'; 
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
function AboutUs() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 這裡應該會有一個調用後端服務的函數來處理表單數據和發送電子郵件
        console.log('Form submitted:', formData);
        // 清空表單
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        });
        alert('感謝您的留言，我們會盡快回覆您！');
        };
        // Define your styles as JavaScript objects

  
  // Usage within your JSX
  return (
    
    <div>
      <HeaderNav/>
      <div className="aboutus-layout">
        <div className="aboutus-content">
          <div className="aboutus-container">
          <h2 className="header-style">About Us</h2>
          <p>Welcome to our website! We are a company dedicated to providing high-quality services. Our team is committed to offering professional solutions and outstanding customer service to our clients.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label-style">Name:</label>
              <input className="input-style" type="text" name="name" value={formData.name} onChange={handleInputChange} required  />
            </div>
            <div className="form-group">
              <label className="label-style">Telephone:</label>
              <input className="input-style" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label className="label-style">Email:</label>
              <input className="input-style" type="email"  name="email" value={formData.email}  onChange={handleInputChange} required />
            </div>
            <div className="formgroup">
              <label className="label-style">Message:</label>
              <textarea  className="input-style" name="message" value={formData.message}  onChange={handleInputChange} required />
            </div>
            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="contact-info">
        <h3 className="headerStyle">Contact Information</h3>
        <p><strong>Phone:</strong> +44 1234 567890</p>
        <p><strong>Address:</strong> 123 High Street, London, EC1 1AB</p>
        {/* Add more contact details here if needed */}
      </div>
    </div>
    <Footer/>
  </div>
  );
}
export default AboutUs;       

