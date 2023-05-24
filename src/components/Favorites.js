/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles/Favorites.css';

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
            <button className='item__button'>Shop Men</button>
            <button className='item__button'>Shop Women</button>
          </div>
          <h3 className='item__title'>Wool Runner</h3>
          <p className='item__signatire'>Cozy Sneaker</p>
        </li>
        <li className='favorites__item'>
          <div className='item__block'>
            <button className='item__button'>Shop Men</button>
            <button className='item__button'>Shop Women</button>
          </div>
          <h3 className='item__title'>Tree Runner</h3>
          <p className='item__signatire'>Light and Breezy Sneaker</p>
        </li>
        <li className='favorites__item'>
          <div className='item__block'>
            <button className='item__button'>Shop Men</button>
            <button className='item__button'>Shop Women</button>
          </div>
          <h3 className='item__title'>Wool Runner Mizzle</h3>
          <p className='item__signatire'>Rain-Ready Sneaker</p>
        </li>
      </ul>
    </section>
  )
}

export default Favorites;
