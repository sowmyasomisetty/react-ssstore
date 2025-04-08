import React,{Suspense} from 'react'
// // importing pages folder files
// import Home from './pages/Home'
// import Product from './pages/Product'
// import PageNotFound from './pages/PageNotFound'
// importing components folder files
import Navbar from './components/Navbar'

// lazy loading of the components
const Home=React.lazy(()=>import('./pages/Home'))
const PageNotFound=React.lazy(()=>import('./pages/PageNotFound'))
const Product=React.lazy(()=>import('./pages/Product'))

import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar/>
      {/* Implementing the routing structure */}
      <Suspense fallback={<h1>Loading.......</h1>}/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        {/* error handling */}
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
