import LesVideos from "../components/LesVideos";
const fqa = [
  {
    title: "Est il possible de filmer dans plusieurs endroits ?",
    content: "Oui, il est possible de filmer dans différents endroits.",
  },
  {
    title: "Est il possible de faire des images aériennes ?",
    content:
      "Oui, nous pouvons réaliser des prises de vue aériennes avec des drones.",
  },
  {
    title: "Puis-je avoir accès aux images de tournage ?",
    content: "Oui, vous pouvez avoir accès aux images après le tournage.",
  },
];

const sub = [
  {
    type: "Basic",
    plan: 'Freelances',
    service: 'Témoignage client',
    Populaire: false,
    price: "De 1 300€ à 3 200€",
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
    service: 'Témoignage client',
    Populaire: false,
    price: "De 2 900€ à 5 800€",
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
    service: 'Témoignage client',
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
  title: "Témoignage client",
  desc: "Qui mieux que vos clients pour parler de votre offre ? En donnant la parole à vos utilisateurs, vous aiguisez la curiosité de ceux qui ne vous connaissent pas encore (lead gen), vous rassurez vos prospects et vous donnez confiance.",
  image: "./blogger-recording-video-with-smartphone.jpg"
}

const content = [
  {
    title: 'Les dernières vidéos "Testimonial client"',
    desc: "Inspirez vous des meilleurs exemples.",
  },
]

function Testimonial() {
  return (
    <LesVideos hero={hero} item={content[0]} sub={sub} desc={desc} fqa={fqa}/>
  );
}

export default Testimonial;
