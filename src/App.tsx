import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ProviderForm from './components/provider/ProviderForm'
import {RootState} from "./state/store"

function App() {
  const { user } = useSelector((state: RootState) => state.logged)

  return (

  <div>
      <h1>Hey, we're working... be patient </h1>
      <BrowserRouter>
        {user !== null ?
          <nav className='navMenu'>
            <Link to='/providers'> Providers </Link>
            <Link to='/products'> Products </Link>
            <Link to='/receipts'> Receipts </Link>
            <Link to='/bills'> Bills </Link>
            <Link to="/shoppingCart" >Shopping Cart</Link>
            <Link to="/LogOut" >Log Out</Link>            
          </nav> :

          <nav className='navMenu'>
            <Link to="/logInGoogle">Log in with google</Link>
            <Link to="/logIn">Log in</Link>
            <Link to="/SignIn">Sign in</Link>
          </nav>}

        <Routes>
          <Route path="logInGoogle" element={<GoogleLogIn />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="/providers" element={<ProviderList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/LogOut" element={<Logout />} />
          <Route path="/updateProduct" element={<EditProduct />} />
          <Route path="/receipts" element={<ReceiptList />} />
          <Route path="/purchaseProduct" element={<PurchaseProduct />} />
          <Route path="/bills" element={<BillList/>}/>
          <Route path="/shoppingCart" element={<ShoppingCar/>}/>
        </Routes>
      </BrowserRouter>
  </div>
  )
}

export default App
  