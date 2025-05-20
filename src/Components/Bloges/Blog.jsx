import './blog.css';
import { GoArrowRight } from "react-icons/go";

const Blog = () => {
  return (
    <div className='bloges'>
<div className="bloges-top">
                <h3>from the blog</h3>
                <span><a href="#">view all <GoArrowRight /></a></span>
              </div>
              <div className="bloges-boxes">
           <div className="bloges-box">
            <img src="https://www.pxdraft.com/wrap/shopapp/assets/img/electronic/el-blog-1.jpg" alt="img" />
            <h2>Make your Marketing website</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            <div className="blog-btn">
              <span><a href="#">read more</a></span>
              <h6>mar 11 2022</h6>
            </div>
             <div className="blog-date">
              <h2>25</h2>
              <p>mar</p>
             </div>
           </div>

           <div className="bloges-box">
            <img src="https://www.pxdraft.com/wrap/shopapp/assets/img/electronic/el-blog-2.jpg" alt="img" />
            <h2>Make your Marketing website</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            <div className="blog-btn">
              <span><a href="#">read more</a></span>
              <h6>mar 11 2022</h6>
            </div>
             <div className="blog-date">
              <h2>25</h2>
              <p>mar</p>
             </div>
           </div>

           <div className="bloges-box">
            <img src="https://www.pxdraft.com/wrap/shopapp/assets/img/electronic/el-blog-3.jpg" alt="img" />
            <h2>Make your Marketing website</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            <div className="blog-btn">
              <span><a href="#">read more</a></span>
              <h6>mar 11 2022</h6>
            </div>
             <div className="blog-date">
              <h2>25</h2>
              <p>mar</p>
             </div>
           </div>

           <div className="bloges-box">
            <img src="https://www.pxdraft.com/wrap/shopapp/assets/img/electronic/el-blog-4.jpg" alt="img" />
            <h2>Make your Marketing website</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            <div className="blog-btn">
              <span><a href="#">read more</a></span>
              <h6>mar 11 2022</h6>
            </div>
             <div className="blog-date">
              <h2>25</h2>
              <p>mar</p>
             </div>
           </div>
           </div>

    </div>
  )
}

export default Blog