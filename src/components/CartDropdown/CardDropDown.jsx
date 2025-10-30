import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CartItem from '../CartItem/CartItem';



import Button from '../Button/button.component.jsx';
import './cartDropDown.styles.scss';
import {CartDropContainer, EmptyMessage, CartItems} from  './CartDropDown.style.jsx';
import { useNavigate } from 'react-router-dom';



const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()
  return (
   <CartDropContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={() => {
        navigate('/checkout')
      }}>GO TO CHECKOUT</Button>
    </CartDropContainer>
  );
};

export default CartDropdown;