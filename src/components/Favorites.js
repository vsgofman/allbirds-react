/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles/Favorites.css';
import iconCozy from '../images/icon__cozy.svg';
import iconBeezy from '../images/icon__beezy.svg';
import iconRain from '../images/icon__rain.svg';

function Favorites() {
  return (
    <section className='favorites'>
      <h2 className='favorites__title'>Our Favorites</h2>
      <div className='favorites__links'>
        <a className='favorites__link' href='#'>Everyday</a>
        <a className='favorites__link' href='#'>Running</a>
        <a className='favorites__link' href='#'>Travel</a>
      </div>
      <ul className='favorites__items'>
        <li className='favorites__item'>
          <div className='item__block item__block_cozy'>
            <button className='item__button'>Shop Men</button>
            <button className='item__button'>Shop Women</button>
          </div>
          <h3 className='item__title'>Wool Runner</h3>
          <div className='item__signatire'>
            <img className='signatire__icon' src={iconCozy} alt='icon cozy' />
            <p className='signatire__text'>Cozy Sneaker</p>
          </div>
        </li>
        <li className='favorites__item'>
          <div className='item__block item__block_breezy'>
            <button className='item__button'>Shop Men</button>
            <button className='item__button'>Shop Women</button>
          </div>
          <h3 className='item__title'>Tree Runner</h3>
          <div className='item__signatire'>
            <img className='signatire__icon' src={iconBeezy} alt='icon beezy' />
            <p className='signatire__text'>Light and Breezy Sneaker</p>
          </div>
        </li>
        <li className='favorites__item'>
          <div className='item__block item__block_rain'>
            <button className='item__button'>Shop Men</button>
            <button className='item__button'>Shop Women</button>
          </div>
          <h3 className='item__title'>Wool Runner Mizzle</h3>
          <div className='item__signatire'>
            <img className='signatire__icon' src={iconRain} alt='icon rain' />
            <p className='signatire__text'>Rain-Ready Sneaker</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Favorites;
