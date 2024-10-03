import HeroPages from '../components/HeroPages';
import Description from '../components/Description';
import Subscription from '../components/Subscription';
import FAQ from '../components/FAQ';
import NewsLetter from '../components/NewLetter';
import Entreprises from '../components/Entreprises';
const fqa = [
  {
    title: 'Pouvons nous diffuser des choses pendant notre live ?',
    content: 'Tout ce que vous voulez. Grâce aux équipes expertes et à leur station de streaming vous pouvez diffusez tous les documents, photos ou vidéos que vous souhaitez. L’opérateur streaming enverra le bon média à votre demande.'
  },
  {
    title: 'Est ce que le public peut poser des questions ?',
    content: 'Si vous désirez un live interactif avec votre public, qu’il soit dans la salle ou derrière un ordinateur, n’hésitez pas à nous l’indiquer. Nos équipes spécialistes des lives s’équiperont du bon matériel pour ajouter cette interactivité à vos événements retransmis en direct. Tout est une question d’organisation.'
  },
  {
    title: 'Est il possible de réutiliser certains passages du live ?',
    content: 'Oui ! Nous vous le recommandons fortement. Vos événements live peuvent et doivent avoir une durée de vie plus longue que le simple jour de l’événement. Pour pouvoir faire ça, la captation est enregistrée. Nous sélectionnons ensuite avec vous les meilleurs passages et produisons des capsules montées, étalonnées, mixées et habillées à vos couleurs pour une diffusion sur les réseaux sociaux.'
  }
];

const sub = [
  {
    type: "Basic",
    Populaire:false,
    price: "De 1 500 € à 6 800 € HT",
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
    price: "À partir de 2 600€",
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
function Live() {
  return (
    <div className="">
      <div className="container overflow-hidden mx-auto flex items-center justify-center">
        <div className='w-full'>
        <HeroPages title={"Live"} desc={"C’est devenu, en quelques années, le format incontournable pour les marques. Diffusez vos événements en live pour garder le lien avec vos audiences et toucher des publics encore plus larges."}/>
        <div className='flex flex-col gap-y-[40px] border-b-[1px] border-white/20 py-[40px]'>
          <Description title='Les dernières vidéos "Live"' desc='Inspirez vous des meilleurs exemples.' />
          <div className=''>
            0 video
          </div>
        </div>
        <Subscription sub={sub}/>
        <Entreprises/>
        <FAQ fqa={fqa}/>
        <NewsLetter/>
      </div>
    </div>
  </div>
  )
}

export default Live