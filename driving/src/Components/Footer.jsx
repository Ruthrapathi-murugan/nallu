import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>
                        Nallu Driving School is dedicated to transforming beginners into skilled, 
                        confident drivers. With our professional courses, we aim to ensure road safety and 
                        driving excellence.
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>123 Driving Lane</p>
                    <p>Driving City, DL 45678</p>
                    <p>Phone: +1 (234) 567-8901</p>
                    <p>Email: info@drivingschool.com</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Nallu Driving School. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
