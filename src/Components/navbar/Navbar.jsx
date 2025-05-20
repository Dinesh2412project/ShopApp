import './Navbar.css';
import { LuUser } from "react-icons/lu";
import { PiHeartStraight } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
const Navbar = () => {
      const [open,setopen]= useState(false);
      const handleclick =() =>setopen(!open);
      const closemenu =() =>setopen(false); 
  return (
    <div className='navbar'>
        <div className="navbar-head">
            <h1>ShopApp</h1>
            <div  onClick={handleclick}className="nav-menu">
              {open ?<MdClear /> :<IoMenu />}
            
            </div>

            <div className="nav-types">
            <input type="text" placeholder='what are you looking for?'/>
                 <span><CiSearch  className='nav-search'/></span>
            </div>
            <div className="navbar-icon">
                <ul className='nav-items'>
                <li> <a href='#'><LuUser  className='nav-icons'/></a>user</li>
                <li> <a href='#'><PiHeartStraight  className='nav-icons'/></a>wishlist</li>
                <li> <a href='#'><FiShoppingCart  className='nav-icons'/></a>my card</li>
                </ul>
            </div>
        </div>
                {/*navbar bottum  method......*/}
       <div className="nav-bottum">
        <ul className={open ?'bottom-link active':'bottom-link'}>                           
          <li><a  onClick={closemenu} href="#">categories</a></li>
          <li><a onClick={closemenu} href="#">demos</a></li>
          <li><a onClick={closemenu} href="#">latest</a></li>
          <li><a  onClick={closemenu} href="#">collection</a></li>
          <li><a  onClick={closemenu} href="#">pages</a></li>
          <li><a  onClick={closemenu} href="#">blog</a></li>
                                                                           
        </ul>
        <span className='nav-btn'><IoCallOutline />820-885-3321</span>
       </div>

    </div>
  )
}

export default Navbar