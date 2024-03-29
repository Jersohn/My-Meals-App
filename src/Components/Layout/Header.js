import { Fragment } from "react";
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCardButton from "./HeaderCardButton";



const Header= (props) =>{
    return ( 
        <Fragment>
    <header className={classes.header}>
      <h1>MY Meals</h1>
     <HeaderCardButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt=" A table full with delicious food"/>
    </div>
    </Fragment>
     );
}

export default Header;