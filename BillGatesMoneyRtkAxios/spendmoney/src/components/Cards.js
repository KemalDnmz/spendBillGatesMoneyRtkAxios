import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { moneyChange } from "../cardSlice";

function Cards({ id, image, title, price }) {
  const { shopItems } = useSelector((store) => store.shop);
  const cardItem = shopItems.find((item) => item.id === id);

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(cardItem.quantity);
  const [isSellable, setIsSellable] = useState(true)
  const [sellColor, setSellColor] = useState("buttonSellGray")

  const sell = () => {
    handleChange(Number(quantity - 1))
  }
  const buy = () => {
    handleChange(Number(quantity + 1));
  };
  const control = () =>{
    if(quantity > 0){
      setIsSellable(false)
      setSellColor("buttonSellRed")
    }  if(quantity==0 ){
      setIsSellable(true)
      setSellColor("buttonSellGray")
    } 
  }
  
  const handleChange = (value) => {
    if(value ===""){
      setQuantity(0)
    }else{
      setQuantity(Number(value) );} 
  };
  
 
  useEffect(() => {
    dispatch(moneyChange({ value: quantity, id: cardItem.id }));
    control()
  }, [quantity]);

  let formatter = new Intl.NumberFormat('tr-TR');
  let priceSeperated = formatter.format(price);

  return (
    <div className="column">
      <div className="card">
        <div className="imgDiv">
          <img src={image} alt="" />
        </div>
        <div className="cardDown">
          <h2>{title}</h2>
          <h3>${priceSeperated}</h3>
          <div className="buttonDiv">
            <button className={sellColor} disabled={isSellable}  onClick={() => sell()}>Sell</button>
            <input
              value={quantity}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button className="buttonBuy"  onClick={() => buy()}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
