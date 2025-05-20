import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-img">
            <img src="https://www.cnet.com/a/img/resize/a0879a178075dfd2ef154fe29048491de48d8f5c/hub/2020/10/30/067bd108-d594-41a2-a390-2a73f9f1ad41/apple-iphone-12-confetti-9923.jpg?auto=webp&fit=crop&height=675&width=1200" alt="img" />
        </div>
        <div className="hero-content">
            <p>you're looking good</p>
            <h1>final clearence up to 80% off</h1>
            <button>discover more</button>
        </div>
                      {/*three box in position method.....*/}

         <div className="hero-bottom">
            <div className="hero-box">
                <img src="https://c1.wallpaperflare.com/preview/772/325/152/laptop-computer-macbook-mac.jpg" alt="img" />
                <div className="hero-letter">
                    <p>new in</p>
                    <h3>canyon star raider</h3>
                    <button>shop now</button>
                </div>
            </div>

            <div className="hero-box">
                <img src="https://c0.wallpaperflare.com/preview/201/787/733/apple-mouse-artificial-flowers-blurred-background-close-up.jpg" alt="img" />
                <div className="hero-letter">
                    <p>new in</p>
                    <h3>canyon star raider</h3>
                    <button>shop now</button>
                </div>
            </div>

            <div className="hero-box">
                <img src="https://media.istockphoto.com/id/660622050/photo/coffee-cup-and-laptop-on-wooden-table-in-coffee-shop.jpg?s=612x612&w=0&k=20&c=Do0EFMBMtBGvcFiIEJsOn9SoK1KZy9MZRNDa4sr3WSY=" alt="img" />
                <div className="hero-letter">
                    <p>new in</p>
                    <h3>canyon star raider</h3>
                    <button>shop now</button>
                </div>
            </div>
         </div>


    </div>
  )
}

export default Hero