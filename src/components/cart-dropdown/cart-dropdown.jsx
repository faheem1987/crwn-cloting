import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import "./cart-dropdown.scss";

const CartDropdown = ({cartItems}) => {
  return (
    <div className='cart-dropdown' >
      <div className='cart-items'>
        {cartItems.map(cartItem => 
          <CartItem key={cartItem.id} item={cartItem} />
        )}
      </div>
      <CustomButton>Go TO CHECKOUT</CustomButton>
      
    </div>
  );
};

const mapStateToPros = ({cart: {cartItems}}) => ({
  cartItems
});

export default connect(mapStateToPros)(CartDropdown);