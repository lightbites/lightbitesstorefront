import React, { Component } from "react"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
//TODO: Cart Item
import Item from './Item'
//TODO: Total/Checkout

//Material Components
import Container from '@material-ui/core/Container'


class Cart extends Component {
  render() {
      return (
        <div>
          <Header />
          <Container>
            <Item />
          </Container>
          <Footer />
        </div>
      )
    }
}

export default Cart