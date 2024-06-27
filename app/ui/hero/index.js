import HeroTitle from '@/components/ui/HeroTitle'
import React from 'react'
import Builders from './Builders'
import AreaOfFocus from './AreaOfFocus'
import Innovation from './Innovation'
import Model from './Model'
import Portfolio from './Portfolio'
import CoFound from './CoFound'
import EIRPrograms from './EIRProgram'
import Investors from './Investors'

const HeroSections = () => {
  return (
    <div className='w-full flex flex-col mx-auto justify-center items-center mt-20 space-y-20'>
     <Builders />
     <AreaOfFocus />
     <Innovation />
     <Model />
     <Portfolio />
     <CoFound />
     <EIRPrograms />
     <Investors />
    </div>
  )
}

export default HeroSections