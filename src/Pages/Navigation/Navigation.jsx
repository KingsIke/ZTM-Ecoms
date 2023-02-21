import { Link } from 'react-router-dom'
import { ReactComponent as NavLogo } from '../../assets/crown.svg'
import './Navigation.style.scss'
const Navigation = () => {
    return (
        <div className='navigation' >
            <Link className='logo-container' to='/'>
                <NavLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/sign-in'>
                    SIGN IN
                </Link>

            </div>
        </div >
    )
}
export default Navigation