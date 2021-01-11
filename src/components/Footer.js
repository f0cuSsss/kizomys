import React from 'react'

import '../styles/Footer.css'
import logo from '../images/logos/facebook.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="socials-list">
                    <div className="socials-list__title">Мы в соц. сетях</div>
                    <div className="socials-list__links">
                        <a className="social-item" href="https://www.facebook.com/groups/1210984099001811">
                            <img src={logo} alt="facebook" />
                        </a>
                    </div>
                </div>
                <div className="footer-copyright">&#169; База отдыха &#xab;У Тани-Инны&#xbb; 2021</div>
            </div>
        </footer>
    );
}

export default Footer;