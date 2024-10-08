import LesVideos from "../components/LesVideos";

const fqa = [
  {
    title:
      "Dois-je apprendre par coeur ce que je dois dire dans la masterclass ?",
    content:
      "Non. Ça serait trop fastidieux et surtout contre productif. Il y a deux manière de faire. Si vous maitrisez parfaitement votre sujet et que « improviser » devant une caméra à partir d’un plan et chapitres prévus à l’avance ne vous fait pas peur, alors rien de plus simple : on appuie sur le bouton enregistrer, et c’est à vous ! Soit cet exercice vous parait difficile et on écrit les textes à l’avance et nous les mettons dans un prompteur qui vous permettra de lire tout en regardant la caméra. Exactement comme un présentateur de journal télévisé. Vous n’aurez plus qu’à faire vivre votre texte et donner l’impression que vous ne lisez pas. Les copywriters et nos équipes de tournage mettront tout en place pour vous guider dans cet exercice.",
  },
  {
    title: "Je n’ai pas d’endroit pour filmer, proposez vous des lieux ?",
    content:
      "Oui nous pouvons vous proposer de tourner en studio ou dans des appartements et maisons disponibles pour les shootings vidéo. N’hésitez pas à nous faire la demande !",
  },
  {
    title: "Comment soulever un problème sur mon projet ?",
    content:
      "Nous savons à quel point la production d’une vidéo est un processus complexe et pouvant faire intervenir beaucoup de compétences différentes. C’est pourquoi, chez kronik, quelque soit votre projet, un chef de projet vous est attribué. Que ce soit pour la modification de l’heure de tournage ou d’un point de blocage sur un montage en cours ou bien encore demander une option supplémentaire... votre chef de projet sera toujours là pour vous apporter la bonne réponse et rendre votre expérience vidéo toujours plus agréable. C’est votre référent.",
  },
];

const sub = [
  {
    type: "Basic",
    plan: 'Freelances',
    service: 'Masterclass',
    Populaire: false,
    price: "À partir de 5 200 € pour 4 vidéos",
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
    service: 'Masterclass',
    Populaire: false,
    price: "À partir de 8 200 € pour 4 vidéos",
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
    service: 'Masterclass',
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
}

const content = [
  {
    title: 'Les dernières vidéos "Masterclass"',
    desc: "Inspirez vous des meilleurs exemples.",
  },
]

const hero = {
  title: "Masterclass",
  desc: "Partagez l’expérience et le savoir de votre entreprise. Apportez de la richesse à votre marché pour développer de nouvelles opportunités.",
  image: "./close-up-people-learning-language-work.jpg"
}
function Masterclass() {
  return (
    <LesVideos hero={hero} item={content[0]} sub={sub} desc={desc} fqa={fqa}/>
  );
}

export default Masterclass;
