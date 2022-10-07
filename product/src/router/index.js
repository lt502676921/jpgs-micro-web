import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import ProductCategory from '../pages/ProductCategory'
import ProductRule from '../pages/ProductRule'

const Router = () => {
  return (
    <BrowserRouter basename="/product">
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="category" element={<ProductCategory />}></Route>
        <Route path="rule" element={<ProductRule />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
