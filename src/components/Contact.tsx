import React from 'react'
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <div className='mt-[50px]'>
        <div className="container mx-auto h-full bg-black rounded-lg">
            <div className="flex flex-col items-start lg:max-w-[60%] gap-y-[30px] py-[100px] lg:px-[80px] px-[20px] ">
                <h1 className='text-white/80 text-[50px] leading-[50px] font-Raleway font-black'>Vous avez besoin d'une vidéo sur mesure ?</h1>
                <p className='text-white/80 text-[16px] font-Lato font-[300]'>Nos équipes sont à votre écoute pour vous accompagner sur tous vos projets spécifiques. Nous sommes là pour vous aider à créer une vidéo qui vous ressemble et réponde au mieux à vos objectifs.</p>
                <NavLink to={`/contact`}>
                    <div className='bg-[#222] px-[20px] py-[10px] rounded-full cursor-pointer font-semibold z-[10] hover:bg-[#ff305e] hover:px-[30px] t-300'>Contactez-nous</div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Contact