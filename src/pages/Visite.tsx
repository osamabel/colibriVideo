import LesVideos from "../components/LesVideos";
const fqa = [
  {
    title: "Est il possible de filmer dans plusieurs endroits ?",
    content:
      "Si vous souhaitez présenter plusieurs lieux dans une seule vidéo ou dans une série de vidéos, c’est tout à fait possible. Que ce soit dans la même ville, le même pays ou non, que ce soit en simultanée ou non, de jour ou de nuit, nous sélectionnons les meilleurs talents pour venir shooter vos lieux en fonction de ces spécificités. N’hésitez pas à nous préciser vos besoins et laisser la magie kronik opérer.",
  },
  {
    title: "Est il possible de faire des images aériennes ?",
    content:
      "Oui totalement. Que ce soit en extérieur ou en intérieur, nous pouvons vous proposer des pilotes de drone professionnels. Et pour filmer en toute sécurité, nos professionnels s’occupent d’obtenir toutes les autorisations nécessaires avant le tournage.",
  },
  {
    title: "Puis-je avoir accès aux images de tournage ?",
    content:
      "Oui totalement. Dans le prix de l’offre, vous bénéficiez des droits sur l’ensemble des images et interviews faites le jour tu tournage. À ce titre, vous pouvez consulter l’ensemble des rushs grâce à notre plateforme, vous pouvez les télécharger et les utiliser comme bon vous semble. Toutefois, ces droits sont non exclusifs. Cela signifie que nous nous réservons le droit de pouvoir réutiliser certaines images pour d’autres vidéos. Si vous souhaitez acquérir les droits exclusifs, n’hésitez pas à nous en faire la demande. Nous vous proposerons un devis pour acheter les droits exclusifs.",
  },
];

const sub = [
  {
    type: "Basic",
    plan: 'Freelances',
    service: 'Visite Guidée',
    Populaire: false,
    price: "De 1 500€ à 5 900 €",
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
    service: 'Visite Guidée',
    Populaire: false,
    price: "De 2 100 € à 7 200 € HT",
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
    service: 'Visite Guidée',
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
  title: "Visite Guidée",
  desc: "Faites découvrir les lieux qui vous tiennent à coeur : bureau, usine, espace de coworking, restaurant, atelier, maison, appartement, ville... et embarquez vos publics dans votre univers.",
  image: "./back-view-curly-woman-checking-map.jpg"
}

const content = [
  {
    title: 'Les dernières vidéos "Visite Guidée"',
    desc: "Inspirez vous des meilleurs exemples.",
  },
]
function Visite() {
  return (
    <LesVideos hero={hero} item={content[0]} sub={sub} desc={desc} fqa={fqa}/>

  );
}

export default Visite;
