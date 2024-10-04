
import Collections from '../components/Collections';

const fqa = [
    {
      title: "Pourquoi devrions nous faire de la vidéo ?",
      content: "Dans un monde de plus en plus concurrentiel et ou l’image devient prépondérante, il ne suffit plus d’être visible. Il faut être vu, entendu et construire une marque puissante, qu’elle soit locale, nationale ou internationale. La vidéo et le storytelling sont les outils les plus efficaces pour y parvenir.",
    },
    {
      title: "Nous aidez-vous à nous raconter ?",
      content: "Oui bien sur ! Une vidéo réussie est une vidéo qui distille les bons messages aux bonnes personnes. Ni plus. Ni moins. Nous vous aidons à définir la structure narrative la plus efficace pour que votre vidéo soit un vrai succès. Les interviewers vous guideront lors des interviews pour aller chercher tous les propos nécessaires pour vous présenter de manière complète et authentique.",
    },
    {
      title: "Combien de temps dure un tournage ?",
      content: "Tout dépend du projet vidéo mais de manière générale un tournage va durer entre une demi journée et une journée. Les dates de tournage sont calés 15 jours avant le jour du shooting et le planning de tournage vous sera envoyé à l’avance pour que tout le monde soit bien prêt le jour J !",
    },
  ];

  const content = [
    {
      title: 'Présentez-vous',
      desc: "Dynamisez votre image en présentant votre entreprise."
    },
    {
      title: 'Recrutez',
      desc: "Attirez les meilleurs talents en ouvrant les coulisses de votre entreprise."
    },
    {
      title: 'Partagez du savoir',
      desc: "Attirez vos futurs clients en leur offrant les premières réponses à leurs questions."
    }
  ]
  const hero = {
    title: "Les vidéos pour Les professionnels du droit",
    desc: "Que vous soyez avocats ou notaires, dynamisez votre image, partagez votre passion et développez votre activité grâce à la vidéo. Les meilleures équipes de production spécialistes de votre univers vous attendent !",
    image: "./blogger.jpg"
  }
function Videospourledroit() {
  return (
    <Collections fqa={fqa} hero={hero} content={content}/>
  )
}

export default Videospourledroit