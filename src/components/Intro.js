/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles/Intro.css';

function Intro() {
  return (
    <section className='intro'>
      <h1 className='intro__title'>The Trail Runner SWT Is Here.</h1>
      <p className='intro__subtitle'>Durable. Comfortable. Ready to get dirty.</p>
      <div className='intro__buttons'>
        <button className='intro__button'>Shop Men</button>
        <button className='intro__button'>Shop Women</button>
      </div>
    </section>
  )
}

export default Intro;
