import './Main.css';
import Intro from '../Intro/Intro';
import Favorites from '../Favorites/Favorites';
import BannerShop from '../BannerShop/BannerShop';
import BannerBlog from '../BannerBlog/BannerBlog';
import woolShoes from '../../images/advantage__wool-shoes.svg';
import planetFriendly from '../../images/advantage__planet-friendly.svg';
import environmental from '../../images/advantage__environmental.svg';

function Main() {
  return (
    <main className='content'>
      <Intro />
      <Favorites />
      <BannerShop
        image={woolShoes}
        title="Seasons Change. Your Shoes Don’t Have To."
        subtitle="Soft and cozy wool shoes to keep you comfortable all year round."
      />
      <BannerBlog
        image={planetFriendly}
        title="Made From Nature, For Nature"
        subtitle="We craft with planet-friendly natural materials, like merino wool and eucalyptus trees, because they're our best chance for a sustainable future."
        buttonText="See how"
      />
      <BannerBlog
        image={environmental}
        title="Reversing Climate Change Through Better Business"
        subtitle="Reducing our environmental impact has been a top priority since day one. But now, we’re taking things further. Explore our overall sustainability approach, our progress thus far, and our bold list of commitments for 2025."
        buttonText="Our Sustainable Practices"
      />
    </main>
  )
}

export default Main;
