import Button from '@/components/Button'
import HeroTitle from '@/components/ui/HeroTitle'
import React from 'react'

const PreFooter = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <HeroTitle text="Let's build companies that help everyone succeed" />
       <div className='flex md:flex-row flex-col space-y-3 md:space-y-0 space-x-0 md:space-x-3'>
       <Button size={"cta"} variant={"default"} className="md:text-xs text-sm shrink-0">
        SINC with us
      </Button>
      <Button variant={"secondary"} size={"cta"} className={"md:text-xs text-sm shrink-0"}>
        Apply to SIP 1.0
      </Button>
       </div>
    </div>
  )
}

export default PreFooter