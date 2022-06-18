import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ProviderForm from './components/provider/ProviderForm'
import {RootState} from "./state/store"
import { useSelector } from 'react-redux';

function App() {

  //const { user } = useSelector((state: RootState) => state.logging)

  return (

  <div>
      <h1>Hey, we're working... be patient </h1>
      <BrowserRouter>
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
          </nav>
      
      </BrowserRouter>
  </div>
  )
}

export default App
  