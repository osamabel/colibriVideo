import LesVideos from "../components/LesVideos";
const fqa = [
  {
    title: "Pouvons nous diffuser des choses pendant notre live ?",
    content:
      "Tout ce que vous voulez. Grâce aux équipes expertes et à leur station de streaming vous pouvez diffusez tous les documents, photos ou vidéos que vous souhaitez. L’opérateur streaming enverra le bon média à votre demande.",
  },
  {
    title: "Est ce que le public peut poser des questions ?",
    content:
      "Si vous désirez un live interactif avec votre public, qu’il soit dans la salle ou derrière un ordinateur, n’hésitez pas à nous l’indiquer. Nos équipes spécialistes des lives s’équiperont du bon matériel pour ajouter cette interactivité à vos événements retransmis en direct. Tout est une question d’organisation.",
  },
  {
    title: "Est il possible de réutiliser certains passages du live ?",
    content:
      "Oui ! Nous vous le recommandons fortement. Vos événements live peuvent et doivent avoir une durée de vie plus longue que le simple jour de l’événement. Pour pouvoir faire ça, la captation est enregistrée. Nous sélectionnons ensuite avec vous les meilleurs passages et produisons des capsules montées, étalonnées, mixées et habillées à vos couleurs pour une diffusion sur les réseaux sociaux.",
  },
];

const sub = [
  {
    type: "Basic",
    plan: 'Freelances',
    service: 'Live',
    Populaire: false,
    price: "De 1 500 € à 6 800 € HT",
    desc: "Le choix le plus adapté pour des vidéos simples et professionnelles.",
    benifits: [
      "Sélection d'un freelance par Colibri",
      "Tarif négocié par Colibri",
      "Réponse sous 48h max",
      "Gestion de projet par le client",
      "Accés à la plateforme",
      "Facturation et paiement sécurisés via Colibri",
    ],
  },
  {
    type: "Standard",
    plan: 'Collectif de freelances',
    service: 'Live',
    Populaire: false,
    price: "À partir de 2 600€",
    desc: "Le meilleur rapport qualité/prix pour une production vidéo supérieure.",
    benifits: [
      "Sélection d'un freelance par Colibri",
      "Tarif négocié par Colibri",
      "Réponse sous 48h max",
      "Gestion de projet par le client",
      "Accés à la plateforme",
      "Facturation et paiement sécurisés via Colibri",
    ],
  },
  {
    type: "Premium",
    plan: 'Agence',
    service: 'Live',
    Populaire: true,
    price: "Sur demande",
    desc: "L’option idéale si vous cherchez un concept créatif unique !",
    benifits: [
      "Accompagnement à l’écriture du brief",
      "Appel d’offres réalisé par Colibri",
      "Réponse sous 3 jours max",
      "Gestion de projet par le client",
      "Accés à la plateforme",
      "Tarifs négociés par Colibri",
    ],
  },
];
const desc = {
  title: "Choisissez la formule qui vous correspond",
  desc: "Nous nous occupons de trouver les meilleurs pour vous.",
};

const hero = {
  title: "Live",
  desc: "C’est devenu, en quelques années, le format incontournable pour les marques. Diffusez vos événements en live pour garder le lien avec vos audiences et toucher des publics encore plus larges.",
  image: "./blogger-making-giveaway-while-live-streaming-smartphone-screen-closeup-web-content-creator-announcing-contest-showing-prize-gift-using-mobile-phone-tripod-video-recording.jpg"
}

const content = [
  {
    title: 'Les dernières vidéos "Live"',
    desc: "Inspirez vous des meilleurs exemples.",
  },
]
function Live() {
  return (
    <LesVideos hero={hero} item={content[0]} sub={sub} desc={desc} fqa={fqa}/>
  );
}

export default Live;