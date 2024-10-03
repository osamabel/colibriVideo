import Contact from '../components/Contact'
import Description from '../components/Description'
import Entreprises from '../components/Entreprises';
import FAQ from '../components/FAQ'
import NewsLetter from '../components/NewLetter'
import Subscription from '../components/Subscription';

const fqa = [
  {
    title: 'Est il possible de filmer dans plusieurs endroits ?',
    content: 'Oui, il est possible de filmer dans différents endroits.'
  },
  {
    title: 'Est il possible de faire des images aériennes ?',
    content: 'Oui, nous pouvons réaliser des prises de vue aériennes avec des drones.'
  },
  {
    title: 'Puis-je avoir accès aux images de tournage ?',
    content: 'Oui, vous pouvez avoir accès aux images après le tournage.'
  }
];

const sub = [
  {
    type: "Basic",
    Populaire:false,
    price: "De 1 300€ à 3 200€",
    desc: "Le choix le plus adapté pour des vidéos simples et professionnelles.",
    benifits : [
      "Sélection d'un freelance par Colibri",
      "Tarif négocié par Colibri",
      "Réponse sous 48h max",
      "Gestion de projet par le client",
      "Accés à la plateforme",
      "Facturation et paiement sécurisés via Colibri"
    ]
  },
  {
    type: "Standard",
    Populaire: false,
    price: "De 2 900€ à 5 800€",
    desc: "Le meilleur rapport qualité/prix pour une production vidéo supérieure.",
    benifits : [
      "Sélection d'un freelance par Colibri",
      "Tarif négocié par Colibri",
      "Réponse sous 48h max",
      "Gestion de projet par le client",
      "Accés à la plateforme",
      "Facturation et paiement sécurisés via Colibri"
    ]
  },
  {
    type: "Premium",
    Populaire:true,
    price: "Sur demande",
    desc: "L’option idéale si vous cherchez un concept créatif unique !",
    benifits : [
      "Accompagnement à l’écriture du brief",
      "Appel d’offres réalisé par Colibri",
      "Réponse sous 3 jours max",
      "Gestion de projet par le client",
      "Accés à la plateforme",
      "Tarifs négociés par Colibri"
    ]
  }
]


function Testimonial() {
  return (
    <div className="">
      <div className="container overflow-hidden mx-auto flex items-center justify-center">
        <div className='w-full'>
          <div className="w-full flex flex-col gap-y-[100px] items-center">
            <div className="flex flex-col gap-y-[30px] w-[90%] lg:w-[40%] items-center min-h-[400px] justify-center">
                <h1 className="text-[34px] md:text-[44px] md:leading-[50px] leading-[40px] lg:text-[44px] font-Raleway font-[700] text-center">
                  Témoignage client
                </h1>
                <p className='text-[16px] text-center'>Qui mieux que vos clients pour parler de votre offre ? En donnant la parole à vos utilisateurs, vous aiguisez la curiosité de ceux qui ne vous connaissent pas encore (lead gen), vous rassurez vos prospects et vous donnez confiance.</p>
            </div>
          </div>
          <div className='flex flex-col gap-y-[40px] border-b-[1px] border-white/20 py-[40px]'>
            <Description title='Les dernières vidéos "Testimonial client"' desc='Inspirez vous des meilleurs exemples.' />
            <div className=''>
              0 video
            </div>
          </div>
          <Subscription sub={sub}/>
          <Entreprises />
          <Contact/>
          <FAQ fqa={fqa}/>
          <NewsLetter/>
        </div>

      </div>
    </div>
  )
}

export default Testimonial