import Creator from '../components/Creators';

const desc = {
    title: "Les tarifs d'un réalisateur",
    desc: "Nous nous occupons de trouver les meilleurs pour vous.",
}

const sub = [
  {
    type: "Basic",
    plan: 'Freelances',
    service: 'Réalisateur',
    Populaire:false,
    price: "À partir de 950 € / jour",
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
    service: 'Réalisateur',
    Populaire: false,
    price: "À partir de 950 € / jour",
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
    service: 'Réalisateur',
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
  title: "Réalisateur",
  desc: "Le réalisateur conçoit la vidéo, son style, sa structure... Il encadre ensuite l’équipe de tournage (ce qu’elle doit filmer, le matériel nécéssaire...) et accompagne l’équipe de postproduction sur les aspects techniques et créatifs.",
  image: "./man-filming-with-professional-camera.jpg"
}
function Realisateur() {
  return (
    <Creator desc={desc} sub={sub} hero={hero}/>
  )
}

export default Realisateur