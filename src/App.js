import React from 'react';
import './App.css';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
  
    constructor(){
      super();
      this.state = {
          products:[
              {
                  price :59999,
                  title:'Mobile Phone',
                  qty: 1,
                  img:'https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80',
                  id:1
              },
              {
                  price :69000,
                  title:'Laptop',
                  qty: 1,
                  img:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
                  id:2
              },
              {
                  price :174000,
                  title:'Shoe',
                  qty: 1,
                  img:'https://images.unsplash.com/photo-1612724189298-89d36b10b26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
                  id:3
              }
          ]
      }
  }

  handleIncreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;
      this.setState ({
          products
      })
  }

  handleDecreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty >= 1){
          products[index].qty -= 1;
      }
      
      this.setState({
          products
      })
  }


  handleDeleteProduct = (id) => {
      const {products} = this.state

      const items = products.filter((item) => item.id !== id);

      this.setState({
          products:items
      })
  }

  getCartCount  =()=> {
    const {products} = this.state;
    let count = 0;

    products.forEach((product)=>{
      count += product.qty;
    })
    return count;
  }

  getCartTotal =()=> {
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
     })

    return cartTotal; 
  }
 
  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar  count={this.getCartCount()}/>
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />

        <div style={{fontSize:20 , padding:10 , color:'green'}}>
          Total: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
