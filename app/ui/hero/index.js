import HeroTitle from '@/components/ui/HeroTitle'
import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import EIRPrograms from './EIRProgram'

const HeroSections = () => {
  return (
    <div className='w-full flex flex-col mx-auto justify-center items-center mt-20 space-y-20'>
     <Section1 />
     <Section2 />
     <Section3 />
     <Section4 />
     <Section5 />
     <Section6 />
     <EIRPrograms />
    </div>
  )
}

export default HeroSections