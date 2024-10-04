import Collections from '../components/Collections';

const fqa = [
    {
      title: "Nous avons tellement de choses à dire ! Nous aidez-vous à canaliser les messages ?",
      content: "Oui bien sur ! Une vidéo réussie est une vidéo qui distille les bons messages aux bonnes personnes. Ni plus. Ni moins. Nous vous aidons à définir la structure narrative la plus efficace pour que votre vidéo About Us soit un vrai succès. Les interviewers vous guideront lors des interviews pour aller chercher tous les propos nécessaires pour présenter votre entreprise de manière complète et authentique.",
    },
    {
      title: "Puis-je avoir accès aux images de tournage ?",
      content: "Oui totalement. Dans le prix de l’offre, vous bénéficiez des droits sur l’ensemble des images et interviews faites le jour tu tournage. À ce titre, vous pouvez consulter l’ensemble des rushs grâce à notre plateforme, vous pouvez les télécharger et les utiliser comme bon vous semble. Toutefois, ces droits sont non exclusifs. Cela signifie que nous nous réservons le droit de pouvoir réutiliser certaines images pour d’autres vidéos (en respectant bien entendu les droits à l’image signés). Si vous souhaitez acquérir les droits exclusifs, n’hésitez pas à nous en faire la demande. Nous vous proposerons un devis pour les acquérir.",
    },
    {
      title: "Comment convaincre un client de participer à un testimonial ?",
      content: "Toute la question est là. Choisir le ou les bons clients qui apporteront leur témoignage c’est un peu comme réaliser un casting parfait au cinéma. Vous devez avant tout choisir un client qui veut le rôle ! Autrement dit, prenez un utilisateur très satisfait par votre produit/ service et qui a en plus réellement envie de le faire. Son enthousiasme communicatif rendra votre vidéo bien plus inspirante et engageante et donc plus performante.",
    },
  ];


  const hero = {
    title: "Les videos de storytelling",
    desc: "À l’heure de la communication éphémère et de la surenchère des contenus pour rester visible, donnez du sens à votre communication. Vos histoires sont authentiques. Racontez les pour inspirer et rassembler.",
    image: "./Storytelling.jpg"
  }

  const content = [
    {
      title: "Racontez votre entreprise",
      desc: "Développez le récit de votre aventure entrepreneuriale.",
    },
    {
      title: "Prenez la parole dans le temps",
      desc: "Racontez vos aventures dans le temps pour engager toujours plus vos communautés.",
    },
    {
      title: 'Donnez la parole à vos clients et utilisateurs',
      desc: "Générez des leads et réassurez vos prospects"
    }
  ]

function Videosdestorytelling() {
  return (
    <Collections fqa={fqa} hero={hero} content={content}/>
  )
}

export default Videosdestorytelling