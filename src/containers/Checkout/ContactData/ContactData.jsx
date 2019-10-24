import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true })
    const order = {
      ingredients: this.state.ingredients,
      price: this.props.price,
      customer: {
        name: 'Pablo',
        address: {
          street: 'TestStreet 1',
          zipCode: '1234',
          country: 'Spain'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
  axios.post('/orders.json', order)// FIREBASE requires .json at the end of our endpoint
    .then(response => {
      this.setState({ loading: false });
      this.props.history.push('/');
    })
    .catch(error => {
      this.setState({ loading: false });
    })

  }

  render() {
    let form = (
      <form action="">
        <input className={classes.Input} type="text" name='name' placeholder='Your name' />
        <input className={classes.Input} type="email" name='email' placeholder='Your email' />
        <input className={classes.Input} type="text" name='street' placeholder='Street' />
        <input className={classes.Input} type="text" name='postal' placeholder='Postal Code' />
        <Button btnType='Success' clicked={this.orderHandler} >ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;