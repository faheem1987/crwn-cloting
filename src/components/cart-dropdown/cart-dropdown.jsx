import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../store/cart/cart.selectors'
import { toggleCartHidden } from '../../store/cart/cart.actions';

import "./cart-dropdown.scss";

const CartDropdown = ({cartItems, history, dispatch}) => {
  return (
    <div className='cart-dropdown' >
      <div className='cart-items'>
        {
          cartItems.length 
            ? cartItems.map(cartItem => 
                <CartItem key={cartItem.id} item={cartItem} />)
            : <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }}>Go TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToPros = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToPros)(CartDropdown));