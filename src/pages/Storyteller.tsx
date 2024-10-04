import Creator from '../components/Creators';

const desc = {
    title: "Les tarifs d'un storyteller",
    desc: "Nous nous occupons de trouver les meilleurs pour vous.",
}

const sub = [
  {
    type: "Basic",
    plan: 'Freelances',
    service: 'Storyteller',
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
    service: 'Storyteller',
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
    service: 'Storyteller',
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
  title: "Storyteller",
  desc: "Vos histoires sont authentiques. Les raconter vous permettra d’inspirer et rassembler vos communautés. Le storyteller est là pour vous aider à les structurer, les écrire et les raconter.",
  image: "./medium-shot-old-woman-posing-spotlight.jpg"
}

function Storyteller() {
  return (
    <Creator desc={desc} sub={sub} hero={hero}/>
  )
}

export default Storyteller