import React, { useEffect, useState } from "react";
import CartBox from "./CartBox"; 
import { useWishlist } from "../context/WishlistContext";
import Wishlist from "./Wishlist";


const Home = (props) => {
  const { setCrt } = props;

  const { wishItems, wishOpen,setWishOpen, toggleWish } = useWishlist();


  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
const [products, setProducts] = useState([]);
const [allProducts, setAllProducts] = useState([]);

  const [cartOpen, setCartOpen] = useState(false);
  
  const [cartItems, setCartItems] = useState([]);

const [likedItems, setLikedItems] = useState([]);

const [menuOpen, setMenuOpen] = useState(false);

const deleteCartItem = (id) => {
  setCartItems(cartItems.filter((item) => item.id !== id));
};


const increaseItem = (id) => {
  setCartItems(
    cartItems.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    )
  );
};
const Like = (id) => {
  if (likedItems.includes(id)) {
    setLikedItems(likedItems.filter((itemId) => itemId !== id));
  } else {
    setLikedItems([...likedItems, id]);
  }
};


const decreaseItem = (id) => {
  setCartItems(
    cartItems
      .map((item) =>
        item.id === id
          ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
          : item
      )
  );
};


const HandleCart = (product) => {
  const exist = cartItems.find((item) => item.id === product.id);

  if (exist) {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, count: 1 }]);
  }
};

const handleWish = (product) => {
  const exist = wishItems.find((item) => item.id === product.id);

  if (exist) {
    setWishItems(wishItems.filter((item) => item.id !== product.id));
  } else {
    setWishItems([...wishItems, product]);
  }
};



  const Search = () => {
    setShowSearch(!showSearch);
  };

useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      setAllProducts(data);
    });
}, []);


const onhandleChange = (e) => {
  const value = e.target.value;
  setSearchText(value);

  if (value === "") {
    setProducts(allProducts);
  } else {
    const result = allProducts.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(result);
  }
};

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        rel="stylesheet"
      ></link>

      <div className="a1">
        <div className="a">
          <h1>Kiddy</h1>
          <p>DRESSES</p>
        </div>

        <div className="icons">
        
          <div className="search">
            <button className="search1" onClick={Search}>
              <i className="bi bi-search"></i>
            </button>
    
            {showSearch && (
              // <input
              //   type="text"
              //   value={searchText}
              //   // onChange={(e) => (setSearchText(e.target.value),onhandleChange)}
              //    onChange={onhandleChange}

              //   placeholder="Search..."
              // />
              <input
  type="text"
  value={searchText}
  onChange={onhandleChange}
  placeholder="Search..."
/>

            )}
            
          </div>

          <div className="nav-wrapper">
 


      
      <div className="nav-icons" >
        <i className="bi bi-handbag" onClick={() => setCartOpen(true)}></i>
        <i className="bi bi-bell"></i>
        <i className="bi bi-heart" onClick={() => setWishOpen(true)}></i>
        <i className="bi bi-person"></i>
      </div>
    </div>
        </div>
      </div>


      <div className="b">
        <div className="drops">
          {["BABIES", "BOYS", "GIRLS"].map((category) => (
            <div className="dropdown" key={category}>
              <button>{category}</button>
              <div className="content">
                <a>T-Shirt</a>
                <a>Shirt</a>
                <a>Pant</a>
                <a>Trouser</a>
              </div>
            </div>
          ))}
        </div>
      </div>

         <div className='c container-fluid'>
      
 </div>

      
      <div className="d">
        <div className="d1">
          <h1>Our Top Categories</h1>
        </div>
        {/* <div className="d2">
          <p>Sorted by:</p>
          <button>
            All Cateory <i className="bi bi-filter"></i>
          </button>
        </div> */}
      </div>

     
      <div className="cards">
        <div className="e">
          {products.map((data) => (
            <div className="mn" key={data.id}>
              <div className="cards1">
                <img src={data.image} alt={data.title} />

<i
  className={`bi like-icon ${
    wishItems.some((item) => item.id === data.id)  ? "bi-heart-fill liked": "bi-heart" }`}
  onClick={() => toggleWish(data)}
></i>

              </div>
              <h1>{data.category}</h1>
              <p>{data.title}</p>
              <h2>${data.price}</h2>

              <div className="star">
                {[1, 2, 3, 4, 5].map((n) => (
                  <i className="bi bi-star-fill" key={n}></i>
                ))}
              </div>

              <button onClick={() => HandleCart(data)}>
                <i className="bi bi-handbag-fill"></i> Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
<Wishlist />

    
     {cartOpen && (
  <CartBox
    cartItems={cartItems}
    onClose={() => setCartOpen(false)}
    onDelete={deleteCartItem}
    onIncrease={increaseItem}
    onDecrease={decreaseItem}
  />
)}

{wishOpen && (
  <CartBox
    cartItems={wishItems}
    onClose={() => setWishOpen(false)}
    onDelete={(id) =>
      setWishItems(wishItems.filter((item) => item.id !== id))
    }
  />
)}


    </>
  );
};

export default Home;


//   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass