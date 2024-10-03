function NewsLetter() {
  return (
    <div className='my-[50px]'>
        <div className="container mx-auto h-full gradient rounded-[16px]">
            <div className="flex flex-col items-center gap-y-[10px] py-[100px] lg:px-[80px] px-[20px] ">
                <h1 className='text-white/80 text-[20px] font-Raleway font-bold'>Besoin d'inspiration pour votre stratégie vidéo ?</h1>
                <p className='text-white/80 text-[16px] font-Lato font-[300]'>Recevez notre newsletter avec nos articles, benchmarks et inspirations.</p>
                <div className='flex flex-col items-center gap-[10px] mt-[30px] w-full md:w-[60%] max-w-[450px] '>
                  <input className='py-[10px] px-[10px] rounded-md w-full text-[#171717]' placeholder='Enter votre email' type="email" name="" id="" value="" />
                  <div className='w-full bg-[#222] px-[20px] py-[9px] text-white rounded-md cursor-pointer font-[400] z-[10] text-center border-[1px] border-transparent hover:border-[#fff] hover:bg-transparent hover:px-[30px] t-300'>inscription</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter