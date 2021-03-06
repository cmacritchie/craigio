import { useEffect, useState } from 'react'
import FadeInSection from '../HOC/fadeInSection'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import "../css/style.css"

import About from './about'
import Frameworks from './frameworks'
import Projects from './projects'
import Contact from './contact'

const HomePage = () => {
  const [highlighted, setHighlighted] = useState([]);

  useEffect(() => {

    // .splice(1, 0, 'Feb');
    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {
        if(entry.isIntersecting){
          
          if(entry.boundingClientRect.top >= entry.rootBounds.top && entry.boundingClientRect.top < entry.rootBounds.bottom ) {
            // console.log('entry from bottom ', entry.target.id)
            setHighlighted(oldArray => [entry.target.id, ...oldArray])
        }

          if(entry.boundingClientRect.bottom >= entry.rootBounds.top && entry.boundingClientRect.bottom < entry.rootBounds.bottom ) {
            // console.log('entry from top ', entry.target.id)
            setHighlighted(oldArray => [...oldArray.slice(0,1), entry.target.id, ...oldArray.slice(1)])
          }
        }

        if(!entry.isIntersecting){
          if(entry.boundingClientRect.top > entry.rootBounds.bottom){
            setHighlighted(oldArray => oldArray.filter(item => item !== entry.target.id))
          } 
        }
      })
      }, {
          rootMargin: '0px 0px -75% 0px', //top, right, bottom left
          // threshold:[0, 0.5, 0.1, 0.15, 0.2, 0.25, 0.4, 0.6, 0.8, 1] 
          threshold:[0, 1] 
      });
      

      let elements = document.querySelectorAll('.navigation-block');

      for (let elm of elements) {
        observer.observe(elm);
      }


    return () => {
      for (let elm of elements) {
        observer.unobserve(elm);
      }
    }
  }, []);

  return (
      <>
      <style jsx>{`
      .header {
        height: 90vh;
        background-image: linear-gradient(
          
          rgba(30, 144, 255, 0.5),
          rgba(3, 37, 69, 0.5)
          ),
          url(${require('../assets/mountain4.jpg')});
        background-repeat: repeat-x; 
        background-size: cover;
        background-position: left;
        position: relative; 
 
      }
    }

    @media screen and (max-width: 700px) {
      .header{
        background-position: center;
          background-image: linear-gradient(
            rgba(30, 144, 255, 0.5),
            rgba(3, 37, 69, 0.5)
              ),
              url( ${require('../assets/mountain2_phone.jpg')});
      }
    }
    `}</style>
      <div className="container">
        <header className="header navigation-block" id="home">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Craig MacRitchie</span>
              <div className="heading-primary--container">
                <div className="heading-primary--sub heading-primary--sub--1">Full-Stack Developer</div>
                <div className="heading-primary--sub heading-primary--sub--2">Data Scientist</div>
                <div className="heading-primary--sub heading-primary--sub--3">Engineer in Training</div>
              </div>
            </h1> 
          </div>   
        </header>
        <Navigation currentTab ={highlighted[0]} />
        <div className="body">       
          <div className={`sections navigation-block`} id="about">
            <FadeInSection>
              <About />
            </FadeInSection>
          </div>
          <div className={`sections navigation-block`} id="skills">
            <FadeInSection>
              <Frameworks />
            </FadeInSection>
          </div>
          <div className={`sections navigation-block`} id="projects">
            <FadeInSection>
              <Projects />        
            </FadeInSection>
          </div>   
          <div className={`sections navigation-block`} id="contact">
            <FadeInSection>
                <Contact />             
            </FadeInSection>
          </div>
        </div> 
        <Footer />
      </div>
  </>
  )
}

export default HomePage