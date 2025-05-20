import './Product.css';
import { GoArrowRight } from "react-icons/go";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";

const Product = () => {
  return (
    <div className='products'>
      <div className="product-top">
        <h3>hot trending products</h3>
        <span><a href="#">view all <GoArrowRight /></a></span>
      </div>
                     {/*set all products.....*/}
        <div className="product-all">
          <div className="product-box">
            <img className='product-img1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhHaa8gRzkOpOetS_ctYfBLONPAmK2b4uVA&s" aground_lt="img" />
            <div className="product-star">
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
            </div>
            <h4>fine-knit-sweater</h4>
            <div className="product-rate">
              <h3>$28.50</h3>
              <h4 className='pro-r'>$30.50</h4>
            </div>
            <button><CgShoppingCart /> add to cart</button>
            <p>sale</p>
          </div>

          <div className="product-box">
            <img className='product-img1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGMPgfaoc9EZLqV1sGpwu7biAQM9FlJU_nBg&s" aground_lt="img" />
            <div className="product-star">
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
            </div>
            <h4>fine-knit-sweater</h4>
            <div className="product-rate">
              <h3>$28.50</h3>
              <h4 className='pro-r'>$30.50</h4>
            </div>
            <button><CgShoppingCart /> add to cart</button>
            <p>sale</p>
          </div>

          <div id='prod-1' className="product-box">
            <img className='product-img1' src="https://www.jiomart.com/images/product/original/rvx1zokqjd/skadioo-compatible-iphone-charger-compatible-apple-charger-20-watt-fast-charger-with-usb-cable-for-all-iphones-works-with-iphone-13-13-pro-13-mini-12-12-pro-11-11-pro-11-pro-xr-se-20-watt-c-type-charger-adapter-with-cable-for-iphones-all-series-product-images-orvx1zokqjd-p591813869-0-202206012333.jpg?im=Resize=(1000,1000)" aground_lt="img" />
            <div className="product-star">
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
            </div>
            <h4>fine-knit-sweater</h4>
            <div className="product-rate">
              <h3>$28.50</h3>
              <h4 className='pro-r'>$30.50</h4>
            </div>
            <button><CgShoppingCart /> add to cart</button>
            <p>sale</p>
          </div>   

          <div id='prod-1' className="product-box">
            <img className='product-img1' src="https://api.runbazaar.com/media/__sized__/product_img/2021/07/13/6971408152254/4_vL5M9Z4-smart_crop-c0-5__0-5-750x750-70.jpg" aground_lt="img" />
            <div className="product-star">
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
            </div>
            <h4>fine-knit-sweater</h4>
            <div className="product-rate">
              <h3>$28.50</h3>
              <h4 className='pro-r'>$30.50</h4>
            </div>
            <button><CgShoppingCart /> add to cart</button>
            <p>sale</p>
          </div>

          <div id='prod-1' className="product-box">
            <img className='product-img1' src="https://images.jdmagicbox.com/quickquotes/images_main/sony-ilce-3500j-20-1-mp-dslr-camera-with-sel1850-lens-black-182660450-yxmaq.jpg" aground_lt="img" />
            <div className="product-star">
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
            </div>
            <h4>fine-knit-sweater</h4>
            <div className="product-rate">
              <h3>$28.50</h3>
              <h4 className='pro-r'>$30.50</h4>
            </div>
            <button><CgShoppingCart /> add to cart</button>
            <p>sale</p>
          </div>

          <div id='prod-1' className="product-box">
            <img className='product-img1' src="https://therealrepaircompany.co.za/wp-content/uploads/2020/10/apple-earpods-lightning.jpg" aground_lt="img" />
            <div className="product-star">
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
              <span><FaRegStar /></span>
            </div>
            <h4>fine-knit-sweater</h4>
            <div className="product-rate">
              <h3>$28.50</h3>
              <h4 className='pro-r'>$30.50</h4>
            </div>
            <button><CgShoppingCart /> add to cart</button>
            <p>sale</p>
          </div>
          
        </div>



    </div>
  )
}

export default Product