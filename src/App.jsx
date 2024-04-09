import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import NoPage from './pages/nopage/NoPage'
import Productinfo from './pages/productinfo/Productinfo'
import { ProtectedRouteForAdmin, ProtectedRouteForUser, ScrollTop } from './components'
import CartPage from './pages/cartpage/CartPage'
import AllProductPage from './pages/allproduct/AllProductPage'
import Signup from './pages/registration/Signup'
import Login from './pages/registration/Login'
import UserDashboard from './pages/userdashboard/UserDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import AddProductPage from './pages/admin/AddProductPage'
import UpdateProductPage from './pages/admin/UpdateProductPage'
import CategoryPage from './pages/category/CategoryPage'
import MyState from './context/MyState'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path='/' element= {<HomePage />} />
          <Route path='/' element= {<NoPage />} />
          <Route path='/productinfo/:id' element= {<Productinfo />} />
          <Route path='/cartpage' element= {<CartPage />} />
          <Route path='/allproduct' element= {<AllProductPage />} />
          <Route path='/signup' element= {<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/categorypage/:categoryname' element= {<CategoryPage />} />
          <Route path='/user-dashboard' element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />
          <Route path='/admin-dashboard' element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path={'/addproduct-page'} element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path={'/updateproduct-page/:id'} element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  )
}

export default App