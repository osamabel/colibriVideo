import { useEffect, useState } from "react";

const companies = [
  { id: 1, name: 'Wafacash', logo: './campanies/wafacash.png', link: 'https://www.wafacash.com/' },
  { id: 2, name: 'Wafa Immobilier', logo: './campanies/wafa-immobilier-logo.png', link: 'https://www.wafaimmobilier.com/' },
  { id: 3, name: 'BANK AL-MAGHRIB', logo: './campanies/Bank_Al-Maghrib_logo.png', link: 'https://www.bkam.ma/' },
  { id: 4, name: 'L’ADD', logo: './campanies/add.svg', link: 'https://www.add.gov.ma/' },
  { id: 5, name: 'Naps Maroc', logo: './campanies/naps.png', link: 'https://naps.ma/' },
  { id: 6, name: 'Viamo', logo: './campanies/viamo-color.svg', link: 'https://viamo.io/' },
  { id: 7, name: 'FM6I', logo: './campanies/fonds.png', link: 'https://www.fm6i.ma/' },
  { id: 8, name: 'Pluxee', logo: './campanies/Pluxee_Logo_2023.svg', link: 'https://www.pluxee.ma/' },
  { id: 9, name: 'Enakl', logo: './campanies/enakl.png', link: 'https://www.enakl.com/' },
  { id: 10, name: 'Metropol Park', logo: './campanies/metropol.png', link: 'https://metropol-park.dev-colibri.com/' },
  { id: 11, name: 'SAM Group', logo: './campanies/sam.png', link: 'https://www.samgroupimmo.com/' },
  { id: 12, name: 'Deyar Beaulieu', logo: './campanies/deyar.png', link: 'https://www.https://www.deyarbeaulieu.samgroupimmo.ma/.samgroupimmo.ma/' },
  { id: 13, name: 'Beaulieu Zenata', logo: './campanies/BZ.webp', link: 'https://beaulieuzenata.ma/' },
  { id: 14, name: 'RSP Groupe', logo: './campanies/rsp.png', link: '#' },
];

function Entreprises({isTitle=false}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isHovered, setIsHovered] = useState(false);
  const slideInterval = 50;

  const clonedCompanies = [...companies, ...companies];

  useEffect(() => {
    if (!isHovered) {
      const autoSlide = setInterval(() => {
        setCurrentSlide((prev) => {
          if (direction === 'right') {
            return prev + 1;
          } else {
            return prev - 1;
          }
        });
      }, slideInterval);

      return () => clearInterval(autoSlide);
    }
  }, [direction, isHovered]);

  useEffect(() => {
    if (direction === 'right' && currentSlide >= companies.length * 100) {
      setCurrentSlide(0);
    }
    if (direction === 'left' && currentSlide <= 0) {
      setCurrentSlide(companies.length * 100);
    }
  }, [currentSlide, direction]);

  const handleLeftClick = () => {
    setDirection('left');
    setCurrentSlide((prev) => prev - 200);
  };

  const handleRightClick = () => {
    setDirection('right');
    setCurrentSlide((prev) => prev + 200);
  };

  // Handle mouse enter (pause on hover)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Handle mouse leave (resume on hover exit)
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-[100vw] overflow-hidden py-10 bg-rfed-400 flex flex-col justify-center"
    >
      <div className="container flex items-center gap-x-[10px] justify-center mb-6 relative">
        <div className="absolute right-0 sm:flex items-center hidden">
          <button
            className="min-w-[30px] min-h-[30px] flex items-center justify-center hover:bg-black/5 rounded-full"
            onClick={handleLeftClick}>←</button>
          <button
            className="min-w-[30px] min-h-[30px] flex items-center justify-center hover:bg-black/5 rounded-full"
            onClick={handleRightClick}
          >→</button>
        </div>
        {
          isTitle &&
          <h1 className="text-center text-[16px] lg:text-[18px] font-Lato font-[300]">
            Plus de 300 entreprises nous font confiance.
          </h1>
        }
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex w-max transition-transform duration-[100ms] ease-linear"
        style={{ transform: `translateX(-${currentSlide}px)` }}
      >
        {clonedCompanies.map((company, index) => (
          <a
            key={index}
            href={company.link}
            className="flex justify-center items-center min-w-[120px] lg:min-w-[200px] p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-[70px] lg:max-w-[100px] lg:w-auto max-h-[100px] transition-all duration-300"
            />
          </a>
        ))}
      </div>
      <div className="flex items-center sm:hidden">
        <button
          className="min-w-[30px] min-h-[30px] flex items-center justify-center hover:bg-black/5 rounded-full"
          onClick={handleLeftClick}>←</button>
        <button
          className="min-w-[30px] min-h-[30px] flex items-center justify-center hover:bg-black/5 rounded-full"
          onClick={handleRightClick}
        >→</button>
      </div>
    </div>
  );
}


export default Entreprises;
