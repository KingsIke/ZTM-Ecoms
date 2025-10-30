import './cartIcon.style.scss';
import {CartIconContainer, ItemCount, ShoppingIcons } from './CartIcon.style.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
    const toggleIsCartOpen = () =>  setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcons/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon