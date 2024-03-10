import React, { useContext } from 'react'
import { Category, HeroSection, HomePageProductCard, Layout, Testimonials, Track } from '../../components'
import MyContext from '../../context/MyContext'

const HomePage = () => {

  const name = useContext(MyContext)
  
  return (
    <div>
        <Layout>
          
          <HeroSection />  
          <Category />
          <HomePageProductCard />
          <Track />
          <Testimonials />
          <h1>name: {name}</h1>

        </Layout> 
    </div>
  )
}

export default HomePage