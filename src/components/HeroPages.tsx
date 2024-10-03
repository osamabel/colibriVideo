
function HeroPages({title, desc} : any) {
  return (
    
    <div className="w-full flex flex-col gap-y-[100px] items-center">
        <div className="flex flex-col gap-y-[30px] w-[90%] lg:w-[40%] items-center min-h-[500px] justify-center">
            <h1 className="text-[34px] md:text-[44px] md:leading-[50px] leading-[40px] lg:text-[44px] font-Raleway font-[700] text-center">{title}
            </h1>
            <p className='text-[16px] text-center'>
                {desc}
            </p>
        </div>
    </div>
  )
}

export default HeroPages