import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  SideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  // Better way of setting the state when it depends on the previous state
  SideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render() {
    return (
    <Aux>
        <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} />
      <SideDrawer
        open={this.state.showSideDrawer}
        closed={this.SideDrawerCloseHandler}
      />
      <main className={classes.Content}>
        {this.props.children}
      </main>
    </Aux>

    );
  }
}




export default Layout;