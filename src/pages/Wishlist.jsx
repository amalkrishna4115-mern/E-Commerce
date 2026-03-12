import React from "react";
import CartBox from "./CartBox";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishItems, wishOpen, setWishOpen, removeWish } = useWishlist();

  if (!wishOpen) return null;

  return (
    <CartBox
      cartItems={wishItems}
      onClose={() => setWishOpen(false)}
      onDelete={removeWish}
    />
  );
};

export default Wishlist;
