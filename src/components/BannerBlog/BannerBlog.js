import Banner from '../Banner/Banner';

function BannerBlog({ image, title, subtitle, buttonText }) {
  return (
    <Banner image={image} title={title} subtitle={subtitle}>
      <button className='banner__button banner__button_blog'>{buttonText}</button>
    </Banner>
  )
}

export default BannerBlog;
