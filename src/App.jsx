import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import NoPage from './pages/nopage/NoPage'
import Productinfo from './pages/productinfo/Productinfo'
import { ScrollTop } from './components'
import CartPage from './pages/cartpage/CartPage'
import AllProductPage from './pages/allproduct/AllProductPage'
const App = () => {
  return (
    <div>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path='/' element= {<HomePage />} />
          <Route path='/' element= {<NoPage />} />
          <Route path='/productinfo' element= {<Productinfo />} />
          <Route path='/cartpage' element= {<CartPage />} />
          <Route path='/allproduct' element= {<AllProductPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App