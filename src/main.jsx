import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import CartBox from './pages/CartBox.jsx'
import page from './pages/page.jsx'
import Cart from './pages/Cart.jsx'
// import { WishlistProvider } from "./context/WishlistContext";
// import { WishlistProvider } from "./context/WishlistContext.jsx";
import { WishlistProvider } from "./context/WishlistContext";

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <WishlistProvider>
    <Home/>
    </WishlistProvider>
    {/* <Page/> */}
     {/* <CartBox/> */}
      {/* <Cart/> */}
      
  </>
)
