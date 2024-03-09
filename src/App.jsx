import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import NoPage from './pages/nopage/NoPage'
import Productinfo from './pages/productinfo/Productinfo'
import { ScrollTop } from './components'
import CartPage from './pages/cartpage/CartPage'
import AllProductPage from './pages/allproduct/AllProductPage'
import Signup from './pages/registration/Signup'
import Login from './pages/registration/Login'
import UserDashboard from './pages/userdashboard/UserDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import AddProductPage from './pages/admin/AddProductPage'
import UpdateProductPage from './pages/admin/UpdateProductPage'
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
          <Route path='/signup' element= {<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user-dashboard' element={<UserDashboard />} />
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path={'/addproduct-page'} element={<AddProductPage />} />
          <Route path={'/updateproduct-page'} element={<UpdateProductPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App