import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import '../styles/infoBottomPage.css';

const InfoBottomPage = () => {
    return (
        <footer className="footer">
            <div className="containerFooter">
                <div className="footer-section about">
                    <h4>About Us</h4>
                    <p>Leading real estate agency with the best properties for sale and rent.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><span>Properties</span></li>
                        <li><span >Services</span></li>
                        <li><span>Contact</span></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <p><FaPhone /> +1 234 567 890</p>
                    <p><FaEnvelope /> info@realestate.com</p>
                </div>

                <div className="footer-section social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                </div>
            </div>
            <hr />
            <p className="copyright">© 2025 RealEstate Pro. All rights reserved.</p>
        </footer>
    );
};

export default InfoBottomPage;
