import react, {useState } from 'react'
    import Cart from './Cart'; 
    import Home from './Home'; 


    export const Page = () => {

    const [search,setsearch] = useState(false)
    const [Babies,setBabies] = useState(false)
    const [Boys,setBoys] = useState(false)
    const [Girls,setGirls] = useState(false)
    const [Like,setLike] = useState(false)
    const [Index,setIndex] = useState(null)
    const [Data,setData] = useState([])
    const [Count,setCount] = useState(1)
    const [Crt,setCrt] = useState(false)
    const [CartData,setCartData] = useState([])
    const [CartBox,setCartBox] = useState(false)
    const [BtnRes,setBtnRes] = useState(false)





      return (
        <div>
          <Home Data={Data} setData={setData} search={search} setsearch={setsearch} Babies={Babies} setBabies={setBabies} Boys={Boys} setBoys={setBoys} Index={Index} setIndex={setIndex} Girls={Girls} setGirls={setGirls} Like={Like} setLike={setLike} Crt={Crt} setCrt={setCrt} CartData={CartData} setCartData={setCartData} BtnRes={BtnRes} setBtnRes={setBtnRes}/>
          <Cart Data={Data} setData={setData} setIndex={setIndex} Index={Index} Count={Count} setCount={setCount}Crt={Crt} setCrt={setCrt} CartData={CartData} setCartData={setCartData} CartBox={CartBox} setCartBox={setCartBox}/>
        </div>
      )
    }
    export default Page