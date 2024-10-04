import LesVideos from '../components/LesVideos';

const fqa = [
  {
    title: 'Nous avons tellement de choses à dire ! Nous aidez-vous à canaliser les messages ?',
    content: 'Oui bien sur ! Une vidéo réussie est une vidéo qui distille les bons messages aux bonnes personnes. Ni plus. Ni moins. Nous vous aidons à définir la structure narrative la plus efficace pour que votre vidéo About Us soit un vrai succès. Les interviewers vous guideront lors des interviews pour aller chercher tous les propos nécessaires pour présenter votre entreprise de manière complète et authentique.'
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
    plan: 'Freelance',
    service: 'About us',
    Populaire:false,
    price: "De 1 700 à 5 800 € HT",
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
    plan: 'Collectif de freelances',
    service: 'About us',
    Populaire: false,
    price: "De 3 200 € à 10 800 € HT",
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
    plan: 'Agence',
    service: 'About us',
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
const desc = {
  title: "Choisissez la formule qui vous correspond",
  desc: "Nous nous occupons de trouver les meilleurs pour vous.",
}

const content = [
  {
    title: 'Les dernières vidéos "About Us"',
    desc: "Inspirez vous des meilleurs exemples.",
  },
]

const hero = {
  title: "About us",
  desc: "C’est un véritable standard dans une stratégie vidéo digne de ce nom. En expliquant la problématique à laquelle vous vous attaquez et la solution que vous construisez, c’est le format idéal pour présenter votre entreprise à toutes vos audiences.",
  image: ""
}

function About() {
  return (
    <LesVideos hero={hero} item={content[0]} sub={sub} desc={desc} fqa={fqa}/>
  )
}
export default About