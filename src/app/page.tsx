"use client"

import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './scss/page.scss'
import { useState } from 'react'



export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);

  const bague1 = [
    {
      src: "/img/bague1/Bague1_1.png",
    },
    {
      src: "/img/bague1/Bague1_3.png",
    },
    {
      src: "/img/bague1/Bague1.png",
    },
  ];
  const bague2 = [
    {
      src: "/img/bague2/Bague2.png",
    },
    {
      src: "/img/bague2/Bague2_3.png",
    },
    {
      src: "/img/bague2/Bague2_2.png",
    },
  ];

  return (
    <main id='MainContent'>
      <Navbar />
      <section className='HeroPage'>
      <h1 className='Ghost'>LucasRaffalli</h1>
        <div className='HeroImg'>
          <div className='HeroText'>

            <span className='name'>Bague de fiançailles en diamant</span>
            <span className='description'>Cette bague de fiançailles en diamant avec halo est en or blanc 14 carats.</span>
          </div>
        </div>
      </section>
      <section className='Section2'>
        <span className='TitleSection2'>Collection</span>
        <section className='AllSlide'>

          <section className="slide">
            <div className='SlideContainer'>
              <button onClick={() => setCurrentImage(currentImage - 1)} disabled={currentImage === 0}>
                <Image className="chevron" alt='chevronBack' src="/svg/backChevron.svg" width="100" height="100" />
              </button>
              <Image className="ImageBague" alt='test' src={bague1[currentImage].src} width="350" height="350" />
              <button onClick={() => setCurrentImage(currentImage + 1)} disabled={currentImage === bague1.length - 1}>
                <Image className="chevron" alt='chevronBack' src="/svg/nextChevron.svg" width="100" height="100" />
              </button>
            </div>
            <div className='HeroText'>
              <span className='name'>Bague de fiançailles en diamant</span>
              {/* <span className='description'>Cette bague de fiançailles en saphir et diamant est en or blanc 14 carats.</span> */}
            </div>
          </section>

          <section className="slide">
            <div className='SlideContainer'>


              <button onClick={() => setCurrentImage2(currentImage2 - 1)} disabled={currentImage2 === 0}>
                <Image className="chevron" alt='chevronBack' src="/svg/backChevron.svg" width="100" height="100" />
              </button>
              <Image className="ImageBague" alt='test' src={bague2[currentImage2].src} width="350" height="350" />
              <button onClick={() => setCurrentImage2(currentImage2 + 1)} disabled={currentImage2 === bague2.length - 1}>
                <Image className="chevron" alt='chevronBack' src="/svg/nextChevron.svg" width="100" height="100" />
              </button>
            </div>
            <div className='HeroText'>
              <span className='name'>Bague de fiançailles en saphir et diamant</span>

              {/* <span className='description'>Cette bague de fiançailles en diamant avec halo est en or blanc 14 carats.</span> */}
            </div>
          </section>
        </section>

      </section>
      {/*//!blabla  */}
      <section className='Section3'>
        <div className='HeroImg'>
          <div className='HeroText'>
            <span className='name'>Bague de fiançailles en saphir et diamant</span>
            <span className='description'>Cette bague de fiançailles en saphir et diamant est en or blanc 14 carats.</span>
          </div>
        </div>
      </section>

      <section className='Section4'>
        <span className='TitleSection4'>Pierres</span>

        <section className='SectionContainer'>
          <div className='Pierre1'>
            <video src="/videos/Pierre1.mp4" controls autoPlay loop width="350" height="350" />
          </div>
          <div className='Pierre2'>
            <video src="/videos/Pierre2.mp4" controls autoPlay loop width="350" height="350" />
          </div>
        </section>

      </section>


      <Footer />
    </main>
  )
}
