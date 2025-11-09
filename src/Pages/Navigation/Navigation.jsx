import { useContext, useState, useEffect } from "react";
import { ReactComponent as NavLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  NavLinks,
  LogoContainer,
  NavLink,
  ToggleContainer,
  ToggleSwitch,
  ToggleInput,
  Slider,
  ModeLabel,
} from "./navigation.style.jsx";
import CartIcon from "../../components/CartIcon/CartIcon";
import CardDropDown from "../../components/CartDropdown/CardDropDown";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
import { useTheme } from "../../contexts/theme.context";


const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { isDark, toggleDarkMode } = useTheme();

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  console.log(currentUser);
  

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (
          isCartOpen &&
          !e.target.closest(".cart-icon-container") &&
          !e.target.closest('[role="dialog"]')
        ) {
          setIsCartOpen(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, [isCartOpen, setIsCartOpen]);


  return (
    <NavigationContainer style={{
        backgroundColor: isDark ? "#222" : "#fff",
        color: isDark ? "#fff" : "#000",
      }}>
      <LogoContainer to="/">
        <NavLogo className="logo" />
      </LogoContainer>
      <NavLinks>
     <ToggleContainer>
          <ToggleSwitch>
            <ToggleInput
              type="checkbox"
              checked={isDark}
              onChange={toggleDarkMode}
            />
            <Slider checked={isDark} />
          </ToggleSwitch>
          <ModeLabel>{isDark ? "Dark" : "Light"}</ModeLabel>
        </ToggleContainer>
      <NavLink to="/shop"  $isDark={isDark} >
      
        SHOP
        </NavLink>
        {currentUser ? (
          <NavLink onClick={signOutHandler} $isDark={isDark}>SIGN OUT</NavLink>
        ) : (
          <NavLink to="/authentication" $isDark={isDark}>SIGN IN</NavLink>
        )}
        <CartIcon />
      </NavLinks>
      {isCartOpen && <CardDropDown />}
    </NavigationContainer>
  );
};
export default Navigation;
