import React from 'react'
import { Link } from 'react-router-dom'

const video = [
  {name: "Testimonial client", link: "testimonialclient"},
  {name: "About", link: "about-us"},
  {name: "Masterclass", link: "masterclass"},
  {name: "After event", link: "afterevent"},
  {name: "Portrait", link: "portrait"},
  {name: "Culture", link: "culture"},
  {name: "RP", link: "relationspublics"},
  {name: "Live", link: "live"},
  {name: "Visite guidée", link: "visiteguidee"},
]

const creators = [
  {name: "Filmmaker", link: "filmmaker"},
  {name: "Storyteller", link: "storyteller"},
  {name: "Monteur", link: "monteur"},
  {name: "Motion Designer", link: "motiondesigner"},
  {name: "Réalisateur", link: "realisateur"},
  {name: "Interviewer", link: "interviewer"},
  {name: "Traducteur", link: "traducteur"},
  
]

const Collections = [
  {name: "Les vidéos de storytelling", link: "videosdestorytelling"},
  {name: "Les vidéos pour Linkedin", link: "videospourlinkedin"},
  {name: "Les vidéos pour le droit", link: "videospourledroit"},
  {name: "Les vidéos pour les restaurateurs", link: "videospourlesrestaurateurs"},
]

function Footer() {
  return (
    <div className='border-t-[1px] border-black/10'>
      <div className="container mx-auto py-[50px] flex flex-wrap gap-x-[100px] gap-y-[50px]">
        <div className='flex flex-col gap-y-[30px]'>
          <h3 className='font-[700] text-[18px]'>Vidéos</h3>
          <ul className='flex flex-col gap-y-[10px]'>
            {
              video.map((item, index) => (
                <li>
                    <Link
                        key={index}
                        to={item.link}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-[300] text-[16px] hover:opacity-60 opacity-40 border-b-2 border-transparent py-[2px] hover:border-secondary transition-colors t-300"
                    >
                        {item.name}
                    </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='flex flex-col gap-y-[30px]'>
          <h3 className='font-[700] text-[18px]'>Créateurs</h3>
          <ul className='flex flex-col gap-y-[10px]'>
            {
              creators.map((item, index) => (
                <li>
                    <Link
                        key={index}
                        to={item.link}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-[300] text-[16px] hover:opacity-60 opacity-40 border-b-2 border-transparent py-[2px] hover:border-secondary transition-colors t-300"
                    >
                        {item.name}
                    </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='flex flex-col gap-y-[30px]'>
          <h3 className='font-[700] text-[18px]'>Collections</h3>
          <ul className='flex flex-col gap-y-[10px]'>
            {
              Collections.map((item, index) => (
                <li>
                    <Link
                        key={index}
                        to={item.link}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-[300] text-[16px] hover:opacity-60 opacity-40 border-b-2 border-transparent py-[2px] hover:border-secondary transition-colors t-300"
                    >
                        {item.name}
                    </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer