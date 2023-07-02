import './SubscriptionBlock.css';

function SubscriptionBlock() {

  return (
    <section className='subscription'>
      <h2 className='subscription__title'>Want First Dibs?</h2>
      <p className='subscription__subtitle'>Join our email list and be&nbsp;the first to&nbsp;know about new limited edition products, material innovations, and lots of&nbsp;other fun updates.</p>
      <form className='subscription__form'>
        <input className='subscription__input'></input>
        <button
          className='subscription__button'
          type='submit'
        >Sign Up</button>
      </form>
      <p className='subscription__signature'>Note: You can opt-out at&nbsp;any time. See our Privacy Policy and Terms.</p>
    </section>
  );
}

export default SubscriptionBlock;
