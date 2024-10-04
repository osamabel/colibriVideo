import HeroPages from '../components/HeroPages';
import FAQ from '../components/FAQ';
import Description from '../components/Description';

const desc = {
    title: "Les tarifs d'un réalisateur",
    desc: "Nous nous occupons de trouver les meilleurs pour vous.",
}
const fqa = [
    {
      title: "Pouvez-vous filmer en dehors de nos services ?",
      content: "Bien entendu et c’est même fondamental. Pour que votre vidéo soit réussie, vous devez être dans les meilleures conditions possibles et donc en dehors de votre service et des potentiels coups de feu ! Nos équipes de production spécialistes de votre secteur d’activité s’adaptent à votre emploi du temps et non l’inverse !",
    },
    {
      title: "Où dois-je diffuser mes vidéos ?",
      content: "Partout où sont vos clients et avant tout les réseaux sociaux : Facebook, Instagram, TikTok... Mais aussi sur votre site internet, vos newsletter si vous en avez mis une en place. Vos audiences font raffoler de vos vidéos.",
    },
    {
      title: "Je suis restaurateur, pas acteur. J’ai peur de gâcher ma vidéo.",
      content: "Pas d’inquiétude. Nos cadreurs et interviewers sont justement là pour vous aider, vous mettre à l’aise et aller chercher le meilleur de vous même. il vous suffit de parler de votre passion, de votre métier, de ceux pour qui vous faites tout ça à savoir vos clients, et vous verrez que le résultat sera incroyable !",
    },
  ];

function Restaurateurs() {
  return (
    <div className="">
      <div className="container overflow-hidden mx-auto flex items-center justify-center">
          <div className='w-full'>
          <HeroPages title={"Les vidéos pour les restaurateurs"} desc={"Touchez votre audience grâce à des vidéos mettant en images votre cuisine et votre restaurant. Les meilleures équipes de production spécialistes de votre univers vous attendent !"}/>
          <div className="flex flex-col gap-y-[40px] border-b-[1px] border-white/20 py-[40px]">
              <Description
              title='Présentez votre restaurant'
              desc="Faites découvrir votre restaurant et votre cuisine à vos futurs clients."
              />
              <div className="">0 video</div>
          </div>
          <div className="flex flex-col gap-y-[40px] border-b-[1px] border-white/20 py-[40px]">
              <Description
              title='Attirez plus de clients'
              desc="Présentez vos plats, donnez la parole à vos clients et faites saliver les prochains."
              />
              <div className="">0 video</div>
          </div>
          <div className="flex flex-col gap-y-[40px] border-b-[1px] border-white/20 py-[40px]">
              <Description
              title='Recrutez les meilleurs'
              desc="Attirez les meilleurs talents en ouvrant les coulisses de votre restaurant."
              />
              <div className="">0 video</div>
          </div>
          <FAQ fqa={fqa} />
          </div>
      </div>
  </div>
  )
}

export default Restaurateurs