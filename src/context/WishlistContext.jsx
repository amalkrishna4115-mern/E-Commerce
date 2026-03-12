import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishItems, setWishItems] = useState([]);
  const [wishOpen, setWishOpen] = useState(false);

  const toggleWish = (product) => {
    const exist = wishItems.find((item) => item.id === product.id);

    if (exist) {
      setWishItems(wishItems.filter((item) => item.id !== product.id));
    } else {
      setWishItems([...wishItems, product]);
    }
  };

  const removeWish = (id) => {
    setWishItems(wishItems.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishItems,
        wishOpen,
        setWishOpen,
        toggleWish,
        removeWish,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
