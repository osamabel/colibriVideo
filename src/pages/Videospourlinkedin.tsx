
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
      title: "Quel est le délai pour produire ma vidéo ?",
      content: "Tout va dépendre du type de vidéo que vous souhaitez réaliser bien sur. Mais de manière générale, entre le tournage et la livraison de la vidéo définitive, il ne faut pas compter plus de 3 à 4 semaines. Mais ce délai ne sera possible que si vous êtes réactifs. En effet, les vidéos sont un vrai travail de collaboration entre vous et les équipes de production. Nous vous envoyons des versions de travail sur lesquelles vous allez pouvoir faire vos retours. Plus vos sessions de retours seront réactives, plus nos talents pourront les retravailler rapidement !",
    },
  ];

  const hero = {
    title: "Les vidéos pour Linkedin",
    desc: "Linkedin est le réseau social professionnel de référence pour les entreprises et leurs collaborateurs. Captez l’attention de vos audiences grâce à la vidéo.",
    image: "./people-holding-linkedin-logo.jpg"
  }

  const content = [
    {
      title: "Faites grandir la notoriété de votre entreprise",
      desc: "Présentez votre entreprise et parlez de votre actualité.",
    },
    {
      title: 'Développez votre marché',
      desc: "Apportez de la valeur à vos audiences et développez vos parts de marché."
    },
    {
      title: 'Attirez plus de clients',
      desc: "Générez des leads et réassurez vos prospects."
    },
    {
      title: 'Recrutez',
      desc: "Attirez les meilleurs talents en ouvrant les coulisses de votre entreprise."
    }
  ]

function Videospourlinkedin() {
  return (
    <Collections fqa={fqa} hero={hero} content={content}/>
  )
}

export default Videospourlinkedin