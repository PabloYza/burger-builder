import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
  // conditionally adapt CSS classes
  let attachedClasses = [classes.sideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <Aux>
      <Backdrop
        show={props.open}
        clicked={props.closed}
      />
      <div className={attachedClasses.join(' ')}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default sideDrawer;