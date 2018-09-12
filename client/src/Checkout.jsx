import React from 'react';
import styles from './../styles/checkout.css';
import Share from './Share.jsx';
import Container from './Container.jsx';
import exampleData from '../exampleData.js';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: exampleData.data,
    };
  }

  
  render() {
    return (
      <div className={ styles.checkout}>
        <Share productData={this.state.productData}/>
        <Container />
      </div>
    );
  }
}

export default Checkout;
