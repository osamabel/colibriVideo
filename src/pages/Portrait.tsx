import HeroPages from '../components/HeroPages';
import Description from '../components/Description';
import Subscription from '../components/Subscription';
import FAQ from '../components/FAQ';
import NewsLetter from '../components/NewLetter';
import Entreprises from '../components/Entreprises';
const fqa = [
  {
    title: 'Devons nous écrire un texte que la personne devra réciter ?',
    content: 'Ça serait la pire chose à faire. On pense souvent (à tort) qu’écrire un texte et l’apprendre par coeur, c’est l’assurance de faire passer le bon message à son audience. Mais en faisant cela, vous risquez d’atteindre le résultat parfaitement opposé. Si la personne qui fait l’objet du portrait, récite un texte appris en amont (et qui n’aura surement pas été écrit par lui), toute son authenticité et toute sa personnalité seront gommées. Nous ne sommes pas des acteurs et du coup, nous ne sommes pour la plupart pas capables d’interpréter un texte et de jouer un personnage. Nos talents sont formés pour préparer les interviews, mettre à l’aise les interviewés et aller chercher le meilleur de ce qu’ils ont à raconter !'
  },
  {
    title: 'Combien de temps dure un tournage ?',
    content: 'Tout dépend du projet vidéo mais de manière générale un tournage va durer entre une demi journée et une journée. Les tournages sont organisés 15 jours à l’avance et le planning de tournage vous sera envoyé bien en amont pour que tout le monde soit bien prêt le jour J !'
  },
  {
    title: 'Est-ce que les lieux de tournage doivent être rangés pour le tournage ?',
    content: 'De préférence oui mais sans exagération ! Il faut garder à l’esprit qu’à travers les différentes vidéos que vous allez réalisées, c’est l’image de votre société que vous renvoyez. Donc ordonnés mais respirant la vie, le réalisme.'
  }
];

const sub = [
  {
    type: "Basic",
    Populaire:false,
    price: "De 1 350€ à 3 800€",
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
    Populaire: false,
    price: "De 2 600€ à 8 200€",
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

function Portrait() {
  return (
    <div className="">
      <div className="container overflow-hidden mx-auto flex items-center justify-center">
        <div className='w-full'>
          <HeroPages title={"Portrait"} desc={"Donnez la parole à vos collaborateurs pour permettre à vos candidats de se reconnaître et se projeter au sein de votre entreprise."}/>
          <div className='flex flex-col gap-y-[40px] border-b-[1px] border-white/20 py-[40px]'>
            <Description title='Les dernières vidéos "Portrait"' desc='Inspirez vous des meilleurs exemples.' />
            <div className=''>
              0 video
            </div>
          </div>
          <Subscription sub={sub}/>
          <Entreprises/>
          <FAQ fqa={fqa}/>
          <NewsLetter/>
        </div>

      </div>
    </div>
  )
}

export default Portrait