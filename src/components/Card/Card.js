import './Card.css';

function Card({ image, title, subtitle }) {

  return (
    <article className='card'>
      <img className='card__img' src={image} alt='sneakers' />
      <div className='card__text-block'>
        <h3 className='card__title'>{title}</h3>
        <p className='card__subtitle'>{subtitle}</p>
      </div>
    </article>
  );
}

export default Card;
