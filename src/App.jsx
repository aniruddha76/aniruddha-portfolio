import './App.css'
import About from './assets/components/About'
import Navbar from './assets/components/Navbar'
import Projects from './assets/components/Projects'
import Contact from './assets/components/Contact'

function App() {

  return (
    <div>

      <Navbar />

      <header id="start">
        <div className="b-center bg-no-repeat bg-cover min-h-dvh" style={{ backgroundColor: "#11111b" }}>
          <div className='hidden sm:block blob h-[500px] w-[600px]'></div>
          <div className='min-h-dvh px-10 sm:px-16 md:px-60 start-container name' style={{ paddingTop: "6rem", paddingBottom: 0 }}>
            <div className='text-white text-xl sm:text-4xl' style={{ fontFamily: "Roboto Condensed,Lato,Arial,sans-serif" }}>
              <h1>Hey there!, I'm</h1>
              <div className='pt-5 pb-5 sm:pb-10 text-[2rem] sm:text-[4rem] md:text-[5rem] text-[#5918df]' style={{ fontWeight: 700 }}>
                Aniruddha Thakur
              </div>
              <div className='text-[2rem] sm:text-[4rem] md:text-[5rem]' style={{fontWeight: 700 }}>
                I Design & Code For Web
              </div>

              <div className='text-xl sm:text-2xl py-5 sm:py-10'>
                I'm a web developer who loves crafting digital magic through
                vibrant concept art and sleek frontend designs. I Love fun Web UI, collaboration and turning idea's into reality.<br />
                <br />
                Simple content, clean design, and thoughtful interactions are my secret ingredients.
                Let’s build something amazing together!
              </div>

            </div>

            <div className='pb-5' style={{ fontWeight: 500 }}>
              <button class="letsTalkBtn"><a href="mailto:aniruddhathakur76@gmail.com">
                <p class="letsTalkBtn-text" >Let's Talk!</p>
                <span class="letsTalkBtn-BG"></span></a>
              </button>
            </div>
          </div>
        </div>
      </header>

      <Projects />

      <About />
      
      <Contact />
    </div>
  )
}

export default App
