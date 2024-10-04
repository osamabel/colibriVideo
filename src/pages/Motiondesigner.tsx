import Creator from '../components/Creators';

const desc = {
    title: "Les tarifs d'un motion designer",
    desc: "Nous nous occupons de trouver les meilleurs pour vous.",
}

const sub = [
  {
    type: "Basic",
    plan: 'Freelances',
    service: 'Motion designer',
    Populaire:false,
    price: "À partir de 790 € / jour",
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
    service: 'Motion designer',
    Populaire: false,
    price: "À partir de 1 040 € / jour",
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
    service: 'Motion designer',
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
  title: "Motion designer",
  desc: "After Effects, Flat Design, illustrations, intro, outro, animations 2D, 3D, typo... c’est son domaine ! Le motion designer est à votre disposition pour concevoir et réaliser tous vos contenus animés.",
  image: "./motion-design-cover.jpg"
}
function Motiondesigner() {
  return (
    <Creator desc={desc} sub={sub} hero={hero}/>
  )
}

export default Motiondesigner