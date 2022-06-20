import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ProviderForm from './components/provider/ProviderForm'
import {RootState} from "./state/store"
import { useSelector } from 'react-redux';
import RoutesSite from './routes/Routes';
import NavBar from './components/NavBar';

function App() {

  

  return (

  <div>
      <h1>Hey, we're working... be patient 🤟🏻 </h1>
      <BrowserRouter>
      <NavBar/>
    
        <RoutesSite />

      </BrowserRouter>
  </div>
  )
}

export default App
  