function HeroPages({ title, desc, image }: any) {
  return (
    <div className="relative w-full flex flex-col gap-y-[100px] items-center bg-pink-100">
      {/* Background Image with Brightness Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{
          backgroundImage: `url(${image})`,
          filter: "brightness(30%)", // Brightness applied only to background
        }}
      ></div>

      {/* Content that is unaffected by the brightness */}
      <div className="flex flex-col gap-y-[30px] w-[90%] lg:w-[40%] items-center min-h-[70vh] justify-center relative z-10">
        <h1 className="text-[34px] md:text-[44px] md:leading-[50px] leading-[40px] lg:text-[44px] font-Raleway text-white font-[700] text-center">
          {title}
        </h1>
        <p className="text-[16px] text-center text-white">{desc}</p>
      </div>
    </div>
  );
}

export default HeroPages;
