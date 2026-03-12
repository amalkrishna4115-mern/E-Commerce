import React from "react";
// import "./CartBox.css";   

const CartBox = ({ cartItems, onClose, onDelete, onIncrease, onDecrease }) => {
  return (
    <div className="cartbox-wrapper">
      <div className="cartbox">
        <div className="cartbox-header">
          <h2>Your Cart</h2>
          <button className="cart-close-btn" onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty">No items in cart</p>
        ) : (
          cartItems.map((item) => (
            <div className="cartbox-item" key={item.id}>
              
              <img src={item.image} alt={item.title} className="cart-img" />

              <div className="cart-info">
                <h4>{item.title}</h4>
                <p className="price">${item.price}</p>

                <div className="count-section">
                  <button onClick={() => onDecrease(item.id)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => onIncrease(item.id)}>+</button>
                </div>
              </div>

              <button className="delete-btn" onClick={() => onDelete(item.id)}>
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartBox;
