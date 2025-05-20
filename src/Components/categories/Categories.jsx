import './Categories.css';
import { GoArrowRight } from "react-icons/go";

const Categories = () => {
  return (
    <div className='categories'>
        <div className="categories-top">
                <h3>popular categories</h3>
                <span><a href="#">view all <GoArrowRight /></a></span>
              </div>

                    {/*product categories of flex method.......*/}

            <div className="categories-bottum">
                <div className="categories-box">
                    <div className="cat-content">
                        <h4>accessories</h4>
                        <p>2items</p>
                    </div>
                      <a href="#"><img src="https://www.pxdraft.com/wrap/shopapp/assets/img/electronic/accessories.png" alt="img" /></a>
                </div>

                <div className="categories-box">
                    <div className="cat-content">
                        <h4>air pods</h4>
                        <p>2items</p>
                    </div>
                      <a href="#"><img src="https://www.pxdraft.com/wrap/shopapp/assets/img/electronic/airpods.png" alt="img" /></a>
                </div>

                <div className="categories-box">
                    <div className="cat-content">
                        <h4>air tag</h4>
                        <p>2items</p>
                    </div>
                      <a href="#"><img src="https://www.pxdraft.com/wrap/shopapp/assets/img/electronic/airtag.png" alt="img" /></a>
                </div>

                <div className="categories-box">
                    <div className="cat-content">
                        <h4>iphone</h4>
                        <p>2items</p>
                    </div>
                      <a href="#"><img src="https://www.pxdraft.com/wrap/shopapp/assets/img/electronic/iphone.png" alt="img" /></a>
                </div>
                </div>       

                <div className="categories-bottum">
                <div className="categories-box">
                    <div className="cat-content">
                        <h4>iphone 12</h4>
                        <p>2items</p>
                    </div>
                      <a href="#"><img src="https://www.pxdraft.com/wrap/shopapp/assets/img/electronic/iphone_12.png" alt="img" /></a>
                </div>

                <div className="categories-box">
                    <div className="cat-content">
                        <h4>iphone 13</h4>
                        <p>2items</p>
                    </div>
                      <a href="#"><img src="https://www.pxdraft.com/wrap/shopapp/assets/img/electronic/iphone_12.png" alt="img" /></a>
                </div>

                <div className="categories-box">
                    <div className="cat-content">
                        <h4>ios 15</h4>
                        <p>2items</p>
                    </div>
                      <a href="#"><img src="https://www.pxdraft.com/wrap/shopapp/assets/img/electronic/iphone_ios.png" alt="img" /></a>
                </div>

                <div className="categories-box">
                    <div className="cat-content">
                        <h4>shop more</h4>
                        <p>2items</p>
                    </div>
                      <a href="#"><img src="https://www.pxdraft.com/wrap/shopapp/assets/img/electronic/shop_iphone.png" alt="img" /></a>
                </div>
                </div>  

                          {/*countdown start in pages......*/}

       <div className="countdown">
        <div className="count-img">
          <img src="https://cdn.mos.cms.futurecdn.net/fmvHKrrEtTParjkThaBpfU.jpg" alt="img" />

        </div>
        </div>
        <div className="counter-box">
          <h5>Hurry up! Limited time offer</h5>
          <h2>Gaming Headset
          Brilliant Lighting Effect</h2>
          <div className="counter">
            <div className="time">
              <h4>00</h4>
              <p>day</p>
            </div>
            <div className="time">
              <h4>00</h4>
              <p>hour</p>
            </div>
            <div className="time">
              <h4>00</h4>
              <p>minute</p>
            </div>
            <div className="time">
              <h4>00</h4>
              <p>second</p>
            </div>
          </div>
          <button className='count-box'>shop now</button>
        </div>
        
                           


    </div>
  )
}

export default Categories