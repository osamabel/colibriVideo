import React from 'react'
import AccordionCostumed from './Accordion'

export interface FAQProps{
  fqa : any[]
}

function FAQ({fqa} : FAQProps) {
  return (
    <div>
        <h1 className='text-[30px] font-Lato font-[700] mb-[20px]'>FAQ</h1>
        <AccordionCostumed fqa={fqa}/>
    </div>
  )
}

export default FAQ