import LesVideos from "../components/LesVideos";
const fqa = [
  {
    title: "Dois-je apprendre par coeur ce que je veux dire dans ma vidéo RP ?",
    content:
      "Non. Ça serait trop fastidieux et surtout contre productif. Il y a deux manière de faire. Si vous maitrisez parfaitement votre sujet et que « improviser » devant une caméra à partir d’un plan et chapitres prévus à l’avance ne vous fait pas peur, alors rien de plus simple : on appuie sur le bouton enregistrer, et c’est à vous ! Soit cet exercice vous parait difficile et on écrit les textes à l’avance et nous les mettons dans un prompteur qui vous permettra de lire tout en regardant la caméra. Exactement comme un présentateur de journal télévisé. Vous n’aurez plus qu’à faire vivre votre texte et donner l’impression que vous ne lisez pas. Copywriters et équipes de tournage mettront tout en place pour vous guider dans cet exercice.",
  },
  {
    title: "Je n’ai pas d’endroit pour filmer, proposez vous des lieux ?",
    content:
      "Oui nous pouvons vous proposer de tourner en studio ou dans des appartements et maisons disponibles pour les shooting vidéo. N’hésitez pas à nous faire la demande ! Il est aussi possible de tourner dans la rue tout en marchant par exemple. Tout est possible. N’hésitez pas à nous demander !",
  },
  {
    title: "Puis-je sous-titrer la vidéo dans d’autres langues ?",
    content:
      "Bien sur. C’est même fortement recommandé si votre activité s’internationalise. L’avantage (parmi d’autres) d’une vidéo c’est qu’elle voyage très bien au delà des frontières. Alors plutôt que de tourner une vidéo par pays, vous pouvez choisir de la faire sous-titrer en anglais, espagnol, chinois, allemand ou l’une des 190 autres langues disponibles.",
  },
];

const sub = [
  {
    type: "Basic",
    plan: 'Freelances',
    service: 'Relations Publics',
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
    service: 'Relations Publics',
    Populaire: false,
    price: "De 2 600 € à 8 300 € HT",
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
    service: 'Relations Publics',
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
  title: "Relations Publics",
  desc: "Faites grandir la notoriété votre marque et développez la réputation de votre marque en prenant la parole régulièrement avec des vidéos de relations publics.",
  image: "./close-up-reporter-taking-interview.jpg"
}

const content = [
  {
    title: 'Les dernières vidéos "Relations Publics"',
    desc: "Inspirez vous des meilleurs exemples.",
  },
]

function Relations() {
  return (
    <LesVideos hero={hero} item={content[0]} sub={sub} desc={desc} fqa={fqa}/>
  );
}

export default Relations;
