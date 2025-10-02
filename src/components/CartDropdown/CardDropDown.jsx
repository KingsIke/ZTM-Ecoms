import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CartItem from '../CartItem/CartItem';



import Button from '../Button/Button.component';
import './cartDropDown.styles.scss';
import { useNavigate } from 'react-router-dom';



const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={() => {
        navigate('/checkout')
      }}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;