import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CartItem from '../CartItem/CartItem';



import Button from '../Button/button.component.jsx';
import './cartDropDown.styles.scss';
import {CartDropContainer, EmptyMessage, CartItems} from  './CartDropDown.style.jsx';
import { useNavigate } from 'react-router-dom';
// import Skeleton from '../Skeleton/Skeleton';




const CartDropdown = () => {
  const { cartItems, isCartOpen, isLoading } = useContext(CartContext);
  const navigate = useNavigate()
  if (!isCartOpen) return null;

  return (
   <CartDropContainer>
      <CartItems>
         {isLoading ? (
                  <>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="cart-item-skeleton">
                        {/* <Skeleton width="60px" height="60px" /> */}
                        <div style={{ flex: 1, marginLeft: 12 }}>
                          {/* <Skeleton width="80%" height="16px" /> */}
                          {/* <Skeleton width="50%" height="14px" /> */}
                        </div>
                      </div>
                    ))}
                  </>
                ) :cartItems.length ? (
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