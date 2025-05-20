import './Fotter.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { PiAddressBookTabsThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Fotter = () => {
  return (
    <div className="fotter">
    <div className='footer-head'>
        <div className="fotter-top">
            <div className="fotter-words">
                <h3>Newsletter subscription</h3>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="fotter-input">
                <input type="text" placeholder='Enter your Email' />
                <button>get started</button>
            </div>
            <div className="fotter-icons">
                <a href="#" className='fotter-icon'><FaFacebook /></a>
                <a href="#" className='fotter-icon'><FaTwitter /></a>
                <a href="#" className='fotter-icon'><IoLogoInstagram /></a>
                <a href="#" className='fotter-icon'><IoLogoLinkedin /></a>
            </div>
        </div>
    </div>
                     {/*fotter link in pages in flex methods......*/}

        <div className="fotter-menubox">
            <div className="fotter-menu">
                <h3>support</h3>
                <ul>
                    <li>help</li>
                    <li>contact us</li>
                    <li>feedback</li>
                    <li>unsubscribe</li>
                    <li>reservation</li>
                </ul>
            </div>

            <div className="fotter-menu">
                <h3>policies</h3>
                <ul>
                    <li>privacy policy</li>
                    <li>terms of use</li>
                    <li>gift card conditions</li>
                    <li>shipping</li>
                    <li>return</li>
                </ul>
            </div>

            <div className="fotter-menu">
                <h3>categories</h3>
                <ul>
                    <li>men</li>
                    <li>women</li>
                    <li>accessories</li>
                    <li>shoes</li>
                    <li>denim</li>
                </ul>
            </div>
            <div className="fotter-address">
                <h1>shop app</h1>
                <ul>
                    <li><PiAddressBookTabsThin className='address-icon'/><a href="#">301 green house london,<br/> E2 8dy uk</a></li>
                    <li><IoCallOutline  className='address-icon'/><a href="#">support@domain.com</a></li>
                    <li><IoIosMail  className='address-icon'/><a href="#">820-885-3321</a></li>
                </ul>
            </div>
            </div>  
            <div className="end-icons">
                <ul>
                    <li>online shoping |</li>
                    <li>promotion |</li>
                    <li>private policy |</li>
                    <li>site map |</li>
                    <li>orders and returns |</li>
                    <li>help |</li>
                    <li>contact us |</li>
                    <li>supports |</li>
                    <li>most populars |</li>
                    <li>new arrivals |</li>
                    <li>special products |</li>
                    <li>manufactures |</li>
                    <li>shippings |</li>
                    <li>payments |</li>
                    <li>returns |</li>
                    <li>refunds |</li>
                    <li>warantee |</li>
                    <li>promotions |</li>
                    <li>customer services |</li>
                    <li>our stores |</li>
                    <li>discount |</li>
                    <li>checkout</li>
                </ul>
                </div>           

    </div>
  )
}

export default Fotter