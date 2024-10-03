import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <div className='py-[50px]'>
        <div className="container mx-auto h-full bg-[#222] rounded-[16px]">
            <div className="flex flex-col items-start lg:max-w-[60%] gap-y-[30px] py-[100px] lg:px-[80px] px-[20px] ">
                <h1 className='text-white/80 text-[50px] leading-[50px] font-Raleway font-[600]'>Vous avez besoin d'une vidéo sur mesure ?</h1>
                <p className='text-white/80 text-[16px] font-Lato font-[300]'>Nos équipes sont à votre écoute pour vous accompagner sur tous vos projets spécifiques. Nous sommes là pour vous aider à créer une vidéo qui vous ressemble et réponde au mieux à vos objectifs.</p>
                <NavLink to={`/contact`}>
                  <div className='gradient px-[20px] rounded-[12px] font-[700] text-white py-[10px] cursor-pointer z-[10] hover:px-[30px] t-300'>Contactez-nous</div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Contact