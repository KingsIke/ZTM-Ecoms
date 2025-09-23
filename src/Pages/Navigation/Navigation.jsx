import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as NavLogo } from '../../assets/crown.svg'
import './Navigation.style.scss';
import CartIcon from '../../components/CartIcon/CartIcon';
import CardDropDown  from '../../components/CartDropdown/CardDropDown';
import { UserContext } from '../../contexts/user.context'
import {signOutUser} from '../../utils/firebase/firebase.utils'
const Navigation = () => {
    const  {currentUser, setCurrentUser} = useContext(UserContext)
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null)
      
    }
    console.log(currentUser)
    return (
        <div className='navigation' >
            <Link className='logo-container' to='/'>
                <NavLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {currentUser ? (
                    <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
                ) : (
                    <Link className='nav-link' to='/authentication'>
                    SIGN IN
                </Link>
                )}
               

            <CartIcon/>
            </div>
            <CardDropDown />
        </div >
    )
}
export default Navigation