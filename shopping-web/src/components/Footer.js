import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
function Footer() {
  return (
    <div className="footer">
      <div className="footer-item">
        <h1 className="footer-title">LAMA.</h1>
        <div className="footer-des">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </div>
        <div className="footer-icons">
            <div className="footer-icon"><FacebookIcon/></div>
            <div className="footer-icon"><InstagramIcon/></div>
            <div className="footer-icon"><TwitterIcon/></div>
            <div className="footer-icon"><PinterestIcon/></div>

        </div>
      </div>
      <div className="footer-item">
        <h3 className="footer-header">Useful Links</h3>
        <ul className="footer-list">
            <li>Home</li>
            <li>Man Fashion</li>
            <li>Accessories</li>
            <li>Order Tracking</li>
            <li>Wishlist</li>
            <li>Cart</li>
            <li>Woman Fashion</li>
            <li>My Account</li>
            <li>WishList</li>
            <li>Terms</li>
        </ul>
      </div>
      <div className="footer-item">
        <h3 className="footer-header">Contact</h3>
        <div className="footer-contact">
            <LocationOnIcon className="footer-contact-icon"/>
            622 Dixie Path , South Tobinchester 98336
        </div>
        <div className="footer-contact">
            <LocalPhoneIcon className="footer-contact-icon" />
            +1 234 56 78
        </div>
        <div className="footer-contact">
            <EmailIcon className="footer-contact-icon"/>
            contact@lama.dev
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" className="footer-contact-img" alt="img"></img>
      </div>
    </div>
  );
}

export default Footer;
