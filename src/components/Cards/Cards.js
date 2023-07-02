import './Cards.css';
import Card from '../Card/Card';

function Cards({ title, titleMod, cards }) {
  return (
    <section className='cards'>
      <h2 className={`cards__title ${titleMod && 'cards__title_weight_normal'}`}>{title}</h2>
      <ul className='cards__list'>
        {cards.map((card, i) => (
          <li className='cards__item'>
            <Card
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Cards;
