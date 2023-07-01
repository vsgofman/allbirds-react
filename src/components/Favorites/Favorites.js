/* eslint-disable jsx-a11y/anchor-is-valid */
import './Favorites.css';
import iconCozy from '../../images/icon__cozy.svg';
import iconBeezy from '../../images/icon__beezy.svg';
import iconRain from '../../images/icon__rain.svg';
import imgCozy from '../../images/favorites__everyday1.svg';
import imgBreezy from '../../images/favorites__everyday2.svg';
import imgRain from '../../images/favorites__everyday3.svg';

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
          <div className='item__block'>
            <img className='item__img' src={imgCozy} alt='sneakers' />
            <button className='item__button'>Shop Men</button>
            <button className='item__button'>Shop Women</button>
          </div>
          <h3 className='item__title'>Wool Runner</h3>
          <div className='item__signature'>
            <img className='signature__icon' src={iconCozy} alt='icon cozy' />
            <p className='signature__text'>Cozy Sneaker</p>
          </div>
        </li>

        <li className='favorites__item'>
          <div className='item__block'>
            <img className='item__img' src={imgBreezy} alt='sneakers' />
            <button className='item__button'>Shop Men</button>
            <button className='item__button'>Shop Women</button>
          </div>
          <h3 className='item__title'>Tree Runner</h3>
          <div className='item__signature'>
            <img className='signature__icon' src={iconBeezy} alt='icon beezy' />
            <p className='signature__text'>Light and Breezy Sneaker</p>
          </div>
        </li>

        <li className='favorites__item'>
          <div className='item__block'>
            <img className='item__img' src={imgRain} alt='sneakers' />
            <button className='item__button'>Shop Men</button>
            <button className='item__button'>Shop Women</button>
          </div>
          <h3 className='item__title'>Wool Runner Mizzle</h3>
          <div className='item__signature'>
            <img className='signature__icon' src={iconRain} alt='icon rain' />
            <p className='signature__text'>Rain-Ready Sneaker</p>
          </div>
        </li>

      </ul>
    </section>
  )
}

export default Favorites;
