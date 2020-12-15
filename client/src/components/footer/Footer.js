// React component imports
import React from 'react'
import './Footer.css'
// react router imports
import {Link} from 'react-router-dom'
// Context API imports
import {useStateValue} from '../../contextAPI/StateProvider';

function Footer() {
    const [{user}, dispatch]=useStateValue();
    return (
        <div className="footer">
            <div className="footer__section">
                <div className="footer__sectionContent">
                    <h4>Get to Know Us</h4>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>About Amazon</p>
                </div>
                <div className="footer__sectionContent">
                    <h4>Make Money with Us</h4>
                    <p>Sell products on Amazon</p>
                    <p>Sell apps on Amazon</p>
                    <p>Become an Affiliate</p>
                </div>
                <div className="footer__sectionContent">
                    <h4>Amazon Payment Products</h4>
                    <p>Amazon Rewards</p>
                    <p>Amazon.com Store Card</p>
                    <p>Amazon Business Card</p>
                </div>
                <div className="footer__sectionContent">
                    <h4>Let Us Help You</h4>
                    <Link to={user? '/': '/login'} className='footer__sectionLink'>Your Account</Link>
                    <Link to='/orders' className='footer__sectionLink'>Your Orders</Link>
                    <p>Returns</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
