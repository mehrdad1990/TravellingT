import React from 'react'
import {ASSETS} from '../../../public/Assets'
import ContactInformation from '@/components/template/contact/ContactInformation'
import HeroSection from '@/components/template/heroSection/HeroSection'
import NewsLetter from '@/components/template/home/subhome/NewsLetter'


function page() {
   
  return (
    <div>
      <HeroSection image={ASSETS.contact_banner} title="Contact Us" />
  


<ContactInformation/>
<NewsLetter/>

    </div>
  )
}

export default page
