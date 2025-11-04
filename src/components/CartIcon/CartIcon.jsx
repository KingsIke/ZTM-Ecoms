import './cartIcon.style.scss';
import {CartIconContainer, ItemCount, ShoppingIcons } from './CartIcon.style.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount, flyAnimation } = useContext(CartContext)
    const toggleIsCartOpen = () =>  setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer onClick={toggleIsCartOpen} aria-label="Open cart">
            <ShoppingIcons  className={flyAnimation ? 'fly' : ''}/>
                  {cartCount > 0 && <ItemCount>{cartCount}</ItemCount>}
            
            {/* <ItemCount>{cartCount}</ItemCount> */}
        </CartIconContainer>
    )
}

export default CartIcon