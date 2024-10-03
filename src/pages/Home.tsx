import Hero from '../components/Hero'
import More from '../components/More'
import Contact from '../components/Contact'
import NewsLetter from '../components/NewLetter'
import Entreprises from '../components/Entreprises'

function Home() {
  return (
    <div className='relative'>
        <Hero />
      
        <Entreprises />
        <More 
        title='Les vidéos les plus demandées' 
        desc='Choisissez celles qui correspondent à vos objectifs et démarrer tout de suite' 
        link='videos' 
        />
        <More 
        title='Les collections populaires' 
        desc='Trouvez celle qui correspond à votre besoin et c’est parti.'
        link='collection' 
        />
        <More 
        title='Les meilleurs talents disponibles pour vos projets' 
        desc='Trouvez les talents dont vous avez besoin pour votre prochain projet vidéo.'
        link='creator' 
        />
        <Contact/>
        <More 
        title='Partout en France, en Europe et dans le monde.' 
        desc='Les meilleurs freelances, collectifs et agences locaux pour une empreinte carbone maîtrisée !'
        link='creator' 
        />
        <More 
        title='Tendances, actualités & conseils' 
        desc='Le meilleurs contenus pour les marques et pour les créateurs !'
        link='resources' 
        />
        <NewsLetter/>
    </div>

  )
}

export default Home