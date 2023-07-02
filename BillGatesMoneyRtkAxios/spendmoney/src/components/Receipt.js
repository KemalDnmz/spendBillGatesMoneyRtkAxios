import { useSelector } from "react-redux";

function Receipt() {
  const shopItems = useSelector((state) => state.shop.shopItems);
  const filtered = shopItems.filter((item) => item.quantity > 0);
  let spentTotalMoney = 0;
  filtered.map((item) => {
    spentTotalMoney += item.price * item.quantity;
  });
  let formatter = new Intl.NumberFormat('tr-TR');
  let totalMoneySeperated = formatter.format(spentTotalMoney);

  if(filtered.length ===0){
    return null
  }

  return (
    <div className="receiptContainer">
      <div className="receiptDiv">
        <h1>Your Receipt</h1>
        {filtered.map((item) => (
          
          <div className="receiptItems" key={item.id}>
            <h3>{item.title}</h3>
            <h3>x {item.quantity}</h3>
            <h3 style={{color:"green"}}>${new Intl.NumberFormat('tr-TR').format(item.quantity * item.price)}</h3>
          </div>
        ))}
        <div className="receiptTotal">
          <h2>TOTAL</h2>
          <h2 style={{color:"green"}}>${totalMoneySeperated}</h2>
          </div>
      
      </div>
      
    </div>
  );
}

export default Receipt;
