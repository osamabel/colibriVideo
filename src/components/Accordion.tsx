import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQProps } from './FAQ';

const AccordionItem = ({ title, content, isOpen, onClick }: any) => (
  <div className="w-full bg-white rounded-lg shadow-sm">
    <button
      className="w-full flex justify-between items-center p-4"
      onClick={onClick}
    >
      <h1 className='text-[16px] font-[400] text-[#222] opacity-50'>{title}</h1>
      <motion.span
        animate={{ rotate: isOpen ? 90 : 0 }}
        className="text-gray-400"
      >
        <ChevronDown/>
      </motion.span>
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden px-4"
    >
      <div className='text-[14x] text-[#222] opacity-30'>{content}</div>
    </motion.div>
  </div>
);

const AccordionCostumed = ({fqa} : FAQProps) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full flex flex-col gap-[10px]">
      {fqa.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default AccordionCostumed;
