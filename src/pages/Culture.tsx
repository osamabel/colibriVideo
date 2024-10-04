import LesVideos from "../components/LesVideos";
const fqa = [
  {
    title: "Pouvez-vous nous aider à définir et écrire notre culture ?",
    content:
      "Non. Nous ne sommes pas des culture designers. Notre mission est de vous aider à mettre votre culture en vidéo. Pour cela vous devez la connaitre, l’avoir écrit et surtout l’avoir déjà éprouvée au sein de votre équipe. Une vidéo culture sera réussie si elle est illustrée par des exemples précis !",
  },
  {
    title: "Puis-je avoir accès aux images de tournage ?",
    content:
      "Oui totalement. Dans le prix de l’offre, vous bénéficiez des droits sur l’ensemble des images et interviews faites le jour tu tournage. À ce titre, vous pouvez consulter l’ensemble des rushs grâce à notre plateforme, vous pouvez les télécharger et les utiliser comme bon vous semble. Toutefois, ces droits sont non exclusifs. Cela signifie que nous nous réservons le droit de pouvoir réutiliser certaines images pour d’autres vidéos (en respectant bien entendu les droits à l’image signés). Si vous souhaitez acquérir les droits exclusifs, n’hésitez pas à nous en faire la demande. Nous vous proposerons un devis pour les acquérir.",
  },
  {
    title: "Puis-je sous-titrer la vidéo dans d’autres langues ?",
    content:
      "Bien sur. C’est même fortement recommandé si votre activité s’internationalise. L’avantage (parmi d’autres) d’une vidéo c’est qu’elle voyage très bien au delà des frontières. Alors plutôt que de tourner une vidéo par pays, vous pouvez choisir de la faire sous-titrer en anglais, espagnol, chinois, allemand ou l’une des 190 autres langues disponibles.",
  },
];

const sub = [
  {
    type: "Basic",
    plan: 'Freelances',
    service: 'Culture',
    Populaire: false,
    price: "De 1 700€ à 3 500€",
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
    service: 'Culture',
    Populaire: false,
    price: "De 3 100€ à 8 300€",
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
    service: 'Culture',
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
const content = [
  {
    title: 'Les dernières vidéos "Culture"',
    desc: "Inspirez vous des meilleurs exemples.",
  },
]

const hero = {
  title: "Culture",
  desc: "Attirez et fidélisez les meilleurs talents avec cette vidéo qui mettra en avant vos équipes et véhiculera votre culture d’entreprise.",
  image: "./close-up-hands-working-pottery.jpg"
}
function Culture() {
  return (
    <LesVideos hero={hero} item={content[0]} sub={sub} desc={desc} fqa={fqa}/>

  );
}

export default Culture;
