/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles/Header.css'
import { Link } from 'react-router-dom';
import headerLogo from '../images/header__logo.svg';
import iconProfile from '../images/icon_profile.svg';
import iconHelp from '../images/icon__help.svg';
import iconCart from '../images/icon__shopping-cart.svg';

function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <Link className='link_men nav__link' href='#'>Men</Link>
        <Link className='link_women nav__link' href='#'>Women</Link>
        <Link className='link_new-arrivals nav__link' href='#'>New Arrivals</Link>
      </nav>
      <img className='header__logo' src={headerLogo} alt='logo' />
      <nav className='nav'>
        <a className='link_sustainability nav__link' href='#'>Sustainability</a>
        <a className='link_stores nav__link' href='#'>Stores</a>
        <a className='link_profile nav__link' href='#'>
          <img className='nav__icon' src={iconProfile} alt='icon profile' />
        </a>
        <a className='link_help nav__link' href='#'>
          <img className='nav__icon' src={iconHelp} alt='icon help' />
        </a>
        <a className='link_cart nav__link' href='#'>
          <img className='nav__icon' src={iconCart} alt='icon shopping cart' />
        </a>
      </nav>
    </header>
  )
}

export default Header;
