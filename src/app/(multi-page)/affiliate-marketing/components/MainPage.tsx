'use client'
import { useEffect } from 'react'
import About from './About'
import Blog from './Blog'
import Choose from './Choose'
import Hero from './Hero'
import HeroSlider from './HeroSlider'
import Services from './Services'
import Testimonial from './Testimonial'
import WeWork from './WeWork'

const MainPage = () => {
  useEffect(() => {
    document.body.classList.add('body7')

    return () => {
      document.body.classList.remove('body7')
    }
  }, [])

  return (
    <>
      <main>
        <Hero />
        <HeroSlider />
        <div className="about-service7-sec sp">
          <About />
          <Services />
        </div>
        <div className="choose7-work7-sec sp">
          <Choose />
          <WeWork />
        </div>
        <div className="tes7-blog7-sec sp">
          <Testimonial />
          <Blog />
        </div>
      </main>
    </>
  )
}

export default MainPage
