import './Main.css';
import Intro from '../Intro/Intro';
import Favorites from '../Favorites/Favorites';
import Cards from '../Cards/Cards';
import BannerShop from '../BannerShop/BannerShop';
import BannerBlog from '../BannerBlog/BannerBlog';
import woolShoes from '../../images/advantage__wool-shoes.svg';
import planetFriendly from '../../images/advantage__planet-friendly.svg';
import environmental from '../../images/advantage__environmental.svg';
import { cardsCollection, cardsNewArrivals, cardsStories } from '../../utils/constants';

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
      <Cards title={'Shop The Collections'} cards={cardsCollection} />
      <BannerBlog
        image={planetFriendly}
        title="Made From Nature, For Nature"
        subtitle="We craft with planet-friendly natural materials, like merino wool and eucalyptus trees, because they're our best chance for a sustainable future."
        buttonText="See how"
      />
      <Cards title={'New Arrivals'} cards={cardsNewArrivals} />
      <BannerBlog
        image={environmental}
        title="Reversing Climate Change Through Better Business"
        subtitle="Reducing our environmental impact has been a top priority since day one. But now, we’re taking things further. Explore our overall sustainability approach, our progress thus far, and our bold list of commitments for 2025."
        buttonText="Our Sustainable Practices"
      />
      <Cards title={'Stories'} cards={cardsStories} titleMod={true} />
    </main>
  )
}

export default Main;
