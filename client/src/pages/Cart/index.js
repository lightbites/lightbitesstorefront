import React, { Component } from "react"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
//TODO: Cart Item
import Item from './Item'
//TODO: Total/Checkout
//TODO: Materialize
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }
}

/*
  Map Item component
  Props
  - Product Information
  - Quantity

  State
  - Quantity
  - Remove Button

  Methods?
*/

class Cart extends Component {
  grabCart() {
    return null;
  }
  render() {
      return (
        <div>
          <Header />
            <div style={styles.container}>
              <Item />
            </div>
          <Footer />
        </div>
      )
    }
}

export default Cart