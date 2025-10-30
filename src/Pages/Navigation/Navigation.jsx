import { useContext } from "react";
import { ReactComponent as NavLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  NavLinks,
  LogoContainer,
  NavLink,
} from "./navigation.style.jsx";
import CartIcon from "../../components/CartIcon/CartIcon";
import CardDropDown from "../../components/CartDropdown/CardDropDown";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  console.log(currentUser);
  return (
    <NavigationContainer>
      <LogoContainer to="/">
        <NavLogo className="logo" />
      </LogoContainer>
      <NavLinks>
      <NavLink to="/shop">
      
        SHOP
        </NavLink>
        {currentUser ? (
          <NavLink onClick={signOutHandler}>SIGN OUT</NavLink>
        ) : (
          <NavLink to="/authentication">SIGN IN</NavLink>
        )}
        <CartIcon />
      </NavLinks>
      {isCartOpen && <CardDropDown />}
    </NavigationContainer>
  );
};
export default Navigation;
