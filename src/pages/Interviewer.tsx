import Creator from '../components/Creators';

const desc = {
    title: "Les tarifs d'un Interviewer",
    desc: "Nous nous occupons de trouver les meilleurs pour vous.",
}

const sub = [
  {
    type: "Basic",
    plan: 'Freelances',
    service: 'Interviewer',
    Populaire:false,
    price: "À partir de 650 € / jour",
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
    service: 'Interviewer',
    Populaire: false,
    price: "À partir de 880 € / jour",
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
    service: 'Interviewer',
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
  title: "Interviewer",
  desc: "C’est l’une des personnes clefs pour une vidéo réussie. Il guide et met en confiance les interviewés pour aller chercher le meilleur de ce qu’ils ont à dire.",
  image: "./smiley-women-doing-radio-show.jpg"
}
function Interviewer() {
  return (
    <Creator desc={desc} sub={sub} hero={hero}/>
  )
}

export default Interviewer