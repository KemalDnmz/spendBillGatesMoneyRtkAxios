import Cards from "./Cards";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetch } from "../cardSlice";

function CardList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);
  const { shopItems } = useSelector((store) => store.shop);

  return (
    <div className="cardList">
      <div className="columns">
        {shopItems.map((item) => {
          return <Cards key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default CardList;
