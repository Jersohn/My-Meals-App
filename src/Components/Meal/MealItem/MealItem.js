import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContex from "../../../Store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContex);

  const addItemToCartHandler = (amount) => {
    cartCtx.addItems({
      id: props.id,
      name: props.name,
      image: props.image,
      price: props.price,
      amount: amount,
    });
  };
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddItemToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
