import './styles/Header.css'
import headerLogo from '../images/header__logo.svg';
import iconProfile from '../images/icon_profile.svg';
import iconHelp from '../images/icon__help.svg';
import iconCart from '../images/icon__shopping-cart.svg';

function Header() {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <a className='nav__link' href='#'>Men</a>
        <a className='nav__link' href='#'>Women</a>
        <a className='nav__link' href='#'>New Arrivals</a>
      </nav>
      <img className='header__logo' src={headerLogo} alt='logo' />
      <nav>
        <a className='nav__link' href='#'>Sustainability</a>
        <a className='nav__link' href='#'>Stores</a>
        <a className='nav__link' href='#'>
          <img className='nav__icon' src={iconProfile} alt='icon profile' />
        </a>
        <a className='' href='#'>
          <img className='nav__icon' src={iconHelp} alt='icon help' />
        </a>
        <a className='' href='#'>
          <img className='nav__icon' src={iconCart} alt='icon shopping cart' />
        </a>
      </nav>
    </header>
  )
}

export default Header;
