import React from 'react'
import classes from './burger.css'
import BurgerIngredient from './BurgerIngredients/BurguerIngredients';

const burger = (props) => {

  // Object.keys() -> returns an array of the keys from the object
  let newIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  })
  .reduce((arr, el) => {
    return arr.concat(el)
  }, []);
  console.log(newIngredients);
  if(newIngredients.length === 0) {
    newIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {newIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;