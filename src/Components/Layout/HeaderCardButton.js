import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContex from "../../Store/cart-context";

const HeaderCardButton = (props) => {
  const [btnisHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContex);

  const numberOfCartItem = cartCtx.items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${btnisHighlighted && classes.bump}`;
  useEffect(() => {
    if (numberOfCartItem === 0) {
      return;
    }
    const timer = setBtnIsHighlighted(true);
    setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [numberOfCartItem]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCardButton;
