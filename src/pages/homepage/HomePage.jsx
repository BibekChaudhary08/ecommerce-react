import React, { useContext } from 'react'
import { Category, HeroSection, HomePageProductCard, Layout, Testimonials, Track } from '../../components'

const HomePage = () => {
  
  return (
    <div>
        <Layout>
          
          <HeroSection />  
          <Category />
          <HomePageProductCard />
          <Track />
          <Testimonials />

        </Layout> 
    </div>
  )
}

export default HomePage