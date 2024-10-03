import Description from "../components/Description";
import Entreprises from "../components/Entreprises";
import FAQ from "../components/FAQ";
import HeroPages from "../components/HeroPages";
import NewsLetter from "../components/NewLetter";
import Subscription from "../components/Subscription";

const fqa = [
  {
    title: 'Puis-je me servir d’une vidéo after event en interne et à l’externe.',
    content: 'Totalement. C’est la beauté de la vidéo. Avec les mêmes images d’un tournage, nous pouvons monter deux vidéos différentes. Une vidéo pour l’interne avec des informations confidentielles qui ne doivent pas sortir de votre entreprise et une vidéo pour l’externe expurgée de toutes informations que vous ne souhaitez pas divulguer en dehors de vos équipes.'
  },
  {
    title: 'Puis-je avoir accès aux images de tournage ?',
    content: 'Oui totalement. Dans le prix de l’offre, vous bénéficiez des droits sur l’ensemble des images et interviews faites le jour tu tournage. À ce titre, vous pouvez consulter l’ensemble des rushs grâce à notre plateforme, vous pouvez les télécharger et les utiliser comme bon vous semble. Toutefois, ces droits sont non exclusifs. Cela signifie que nous nous réservons le droit de pouvoir réutiliser certaines images pour d’autres vidéos. Si vous souhaitez acquérir les droits exclusifs, n’hésitez pas à nous en faire la demande. Nous vous proposerons un devis pour acheter les droits exclusifs.'
  },
  {
    title: 'Puis-je sous-titrer la vidéo dans d’autres langues ?',
    content: 'Bien sur. C’est même fortement recommandé si votre activité s’internationalise. L’avantage (parmi d’autres) d’une vidéo c’est qu’elle voyage très bien au delà des frontières. Alors plutôt que de tourner une vidéo par pays, vous pouvez choisir de la faire sous-titrer en anglais, espagnol, chinois, allemand ou l’une des 190 autres langues disponibles.'
  }
];

const sub = [
  {
    type: "Basic",
    Populaire:false,
    price: "De 1 200€ à 3 400€",
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
    price: "De 1 900€ à 7 900€",
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
function Event() {
  return (
    <div className="">
      <div className="container overflow-hidden mx-auto flex items-center justify-center">
        <div className='w-full'>
        <HeroPages title={"After event"} desc={"Que ce soit pour une communication interne ou externe, la vidéo after event est un superbe outil d’engagement de fidélisation. Il permet de capter, retracer et partager en quelques minutes toute l’ambiance et la dimension d’un événement."}/>
        <div className='flex flex-col gap-y-[40px] border-b-[1px] border-white/20 py-[40px]'>
          <Description title='Les dernières vidéos "After event"' desc='Inspirez vous des meilleurs exemples.' />
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

export default Event