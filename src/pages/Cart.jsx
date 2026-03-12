import React, { useState } from 'react'

const Cart = (props) => {

  let {Data,setData,setIndex,Index,Count,setCount,Crt,setCrt,CartData,setCartData,CartBox,setCartBox} = props


let Inc = (ind) => {
  
  setCount(prev => prev + 1)
 
}

let Dec = (ind) => {
  
  console.log(ind);
  

  if (Count>1) {
    setCount(prev => prev - 1)
  }

}

let HandleCartCancel = () => {

  setCrt(false)

}

let HandleCartBoxCancel = (ind) => {

   let res = CartData.filter((val,indx)=>(ind!=indx))
   setCartData(res)
}



  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet"></link>
    {Crt && <div className="carts">
      <div className="cart">
      <div className="carta">
        <h1>Cart</h1>
        <button onClick={HandleCartCancel}><i class="bi bi-x"></i></button>
      </div>


      <div className="cart_b">
        {CartData.map((val,ind)=>(
        <div key={ind} className="cart_box">
        <img src={val.image} alt="" />
        <div className="cart_box_a">
          <div className="cart_box_ab">
          <p className='cart_category'>{val.category}</p>
          <button onClick={()=>HandleCartBoxCancel(ind)}><i class="bi bi-x"></i></button>
        </div>
        <p className='cart_title'>{val.title}</p>
        <div className="cart_box_ac">
          <span className='cart_price'>{val.price}$</span>
           <div className="count">
            <button onClick={()=>Dec(ind)}>-</button>
           <div className="input">{Count}</div>
           <button onClick={()=>Inc(ind)}>+</button>
           </div>
        </div>
        </div>
      </div>

        ))}


      </div>
      <div className="cart_c">
        <input type="text" placeholder='Enter your promocode'/>
        <button>Apply</button>
      </div>
      <div className="cart_d">
        <div className="cart_db">
          <p>Sub Total</p>
          <p>$5563</p>
        </div>
        <div className="cart_da">
          <p>Discount</p>
          <p>$56</p>
        </div>
        <div className="cart_da">
          <p>Tax</p>
          <p>$00.0</p>
        </div>
        <div className="cart_da">
          <h4>Total</h4>
          <h4>$5520</h4>
        </div>
        <button>Check Out</button>
      </div>
    </div>
    </div>
    }
     </>
    
  )
}

export default Cart