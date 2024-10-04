import Creator from '../components/Creators';

const desc = {
    title: "Les tarifs d'un motion designer",
    desc: "Nous nous occupons de trouver les meilleurs pour vous.",
}

const sub = [
  {
    type: "Basic",
    plan: 'Freelances',
    service: 'Traducteur',
    Populaire:false,
    price: "À partir de 350 € / jour",
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
    service: 'Traducteur',
    Populaire: false,
    price: "À partir de 480 € / jour",
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
    service: 'Traducteur',
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
const hero = {
  title: "Traducteur",
  desc: "Que ce soit pour des sous-titres, du motion design, de l’infographie... nos traducteurs vont pouvoir traduire vos vidéos dans n’importe quelles langues souhaitées.",
  image: "./woman-with-headphones-having-video-call-laptop.jpg"
}

function Traducteur() {
  return (
    <Creator desc={desc} sub={sub} hero={hero}/>
  )
}

export default Traducteur