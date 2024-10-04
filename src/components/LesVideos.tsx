import Contact from "../components/Contact";
import Entreprises from "../components/Entreprises";
import FAQ from "../components/FAQ";
import HeroPages from "../components/HeroPages";
import NewsLetter from "../components/NewLetter";
import Subscription from "../components/Subscription";
import VideoGallary from "../components/VideoGallary";

function LesVideos({hero, item, sub, desc, fqa}: any) {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
          <HeroPages title={hero.title} desc={hero.desc} image={hero.image}/>
          <div className='container overflow-hidden mx-auto flex flex-col'>
          <VideoGallary item={item}/>
          <Subscription sub={sub} desc={desc} />
          <Entreprises />
          <Contact />
          <FAQ fqa={fqa} />
          <NewsLetter />
        </div>
      </div>
    </div>
  );
}

export default LesVideos;
