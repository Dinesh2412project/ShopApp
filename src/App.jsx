import Blog from "./Components/Bloges/Blog"
import Categories from "./Components/categories/Categories"
import Fotter from "./Components/fotter/Fotter"
import Hero from "./Components/hero/Hero"
import Navbar from "./Components/navbar/Navbar"
import Product from "./Components/Products/Product"
import Sales from "./Components/sale-products/Sales"


function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Product/>
    <Categories/>
    <Sales/>
    <Blog/>
    <Fotter/>
    </>
  )
}

export default App
