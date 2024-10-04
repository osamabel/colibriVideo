import HeroPages from '../components/HeroPages';
import Subscription from '../components/Subscription';
import NewsLetter from '../components/NewLetter';
import Entreprises from '../components/Entreprises';

function Creator({sub, desc, hero}:any ) {
  return (
    <div className="">
      <div className='flex flex-col items-center justify-center'>
        <HeroPages title={hero.title} desc={hero.desc} image={hero.image}/>
        <div className="container overflow-hidden mx-auto flex flex-col">
          <Subscription sub={sub} desc={desc}/>
          <Entreprises/>
          <NewsLetter/>
        </div>
    </div>
  </div>
  )
}

export default Creator