import React, { useState } from 'react';
import './Aboutus.css'; // 引入 CSS 檔案
import HeaderNav from './components/HeaderNav';
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

    return (
            <div>
            <HeaderNav/>
            <div className="aboutus-layout">
                {/* 自我介紹和留言表單的內容 */}
                <div className="aboutus-content">
                    <h2>關於我們</h2>
                    <p>歡迎來到我們的網站！我們是一家專注於提供優質服務的公司。我們的團隊致力於為客戶提供專業的解決方案和卓越的客戶服務。</p>

               
                <h3>聯絡我們</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>姓名：</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </div>
        
                    <div className="form-group">
                        <label>電話：</label>
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </div>
        
                    <div className="form-group">
                        <label>電郵：</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </div>
        
                    <div className="form-group">
                        <label>留言：</label>
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </div>
        
                    <button type="submit">提交</button>
                </form>
                </div>  
            </div>
        </div>
        );
    }

export default AboutUs;               
