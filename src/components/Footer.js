import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-row">
                    <p className="footer-title">HELLO MATHS</p>
                </div>
                <div className="footer-row">
                    <Link to="/aboutus" className="footer-link">SITE</Link>
                    <Link to="/aboutus" className="footer-link">SUPPORT</Link>
                    <Link to="/aboutus" className="footer-link">TERMS</Link>
                    <Link to="/aboutus" className="footer-link">PRIVACY</Link>
                </div>
                <div className="footer-row">
                    <p className="footer-copy">Copyright © 2023 - 2024 Hello Maths. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
