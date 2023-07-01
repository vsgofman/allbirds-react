import './Banner.css';

function Banner({ image, title, subtitle, children }) {
  return (
    <section className='banner'>
      <img className='banner__image' src={image} alt='banner' />
      <h2 className='banner__title'>{title}</h2>
      <p className='banner__subtitle'>{subtitle}</p>
      {children}
    </section>
  )
}

export default Banner;
