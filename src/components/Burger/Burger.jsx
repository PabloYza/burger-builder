import React from 'react'
import classes from './burger.css'
import BurgerIngredient from './BurgerIngredients/BurguerIngredients';

const burger = (props) => {

  // Object.keys() -> returns an array of the keys from the object
  const newIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  console.log(newIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {newIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;