import './styles/Main.css';
import Intro from './Intro';
import Favorites from './Favorites';

function Main() {
  return (
    <main className='content'>
      <Intro />
      <Favorites />
    </main>
  )
}

export default Main;
