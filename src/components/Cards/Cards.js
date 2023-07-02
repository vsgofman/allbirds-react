import './Cards.css';
import Card from '../Card/Card';
import imgCard1 from '../../images/shop__item1.png';
import imgCard2 from '../../images/shop__item2.png';
import imgCard3 from '../../images/shop__item3.png';

function Cards({ title, cards }) {
  return (
    <section className='cards'>
      <h2 className='cards__title'>{title}</h2>
      <ul className='cards__list'>
        <li className='cards__item'>
          <Card
            title={'New Arrivals'}
            subtitle={'The latest styles and limited edition colors that you can only find here (while they last, that is).'}
            image={imgCard1}
          />
        </li>
        <li className='cards__item'>
          <Card
            title={'Natural Run Collection'}
            subtitle={'Looking for more sustainable ways to break a sweat? We’ve got you covered from head to toe.'}
            image={imgCard2}
          />
        </li>
        <li className='cards__item'>
          <Card
            title={'Fresh Long Sleeve Tee Colors'}
            subtitle={'It’s crisp, clean and ready for wherever the day takes you.'}
            image={imgCard3}
          />
        </li>
      </ul>
    </section>
  );
}

export default Cards;
