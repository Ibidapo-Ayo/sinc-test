import React from 'react'
import NewsLetter from './components/ui/NewsLetter'
import Main from './components/ui/Main'
import FooterMini from './components/ui/footer'

const Footer = () => {
  return (
    <div className='w-full h-full md:h-[848px] bg-secondary py-10 divide-y divide-bg space-y-8 mt-10'>
        <NewsLetter />
        <Main />
        <FooterMini />
    </div>
  )
}

export default Footer