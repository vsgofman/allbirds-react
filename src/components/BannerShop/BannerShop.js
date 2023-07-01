import Banner from '../Banner/Banner';

function BannerShop({ image, title, subtitle }) {
  return (
    <Banner
      image={image}
      title={title}
      subtitle={subtitle}>
      <button className='banner__button banner__button_shop'>Shop men</button>
      <button className='banner__button banner__button_shop'>Shop women</button>
    </Banner>
  )
}

export default BannerShop;
