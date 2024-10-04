import HeroPages from '../components/HeroPages';
import FAQ from '../components/FAQ';
import VideoGallary from './VideoGallary';

function Collections({fqa, hero, content}: any) {
  return (
    <div className="">
        <div className="flex flex-col items-center justify-center">
            <HeroPages title={hero.title} desc={hero.desc} image={hero.image}/>
            <div className='container overflow-hidden mx-auto flex flex-col'>
                {
                    content.map((item: any, index: number)=>(
                      <div key={index} className= ''>
                        <VideoGallary item={item}/>
                      </div>
                    ))
                }
              <FAQ fqa={fqa} />
            </div>
        </div>
    </div>
  )
}

export default Collections