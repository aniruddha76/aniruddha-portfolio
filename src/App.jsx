import './App.css'
import About from './assets/components/About'
import Contactform from './assets/components/Contactform'
import Navbar from './assets/components/Navbar'
import Projects from './assets/components/Projects'

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

      <div id='contact' className='min-h-dvh flex flex-col justify-between' style={{ backgroundColor: "#0c0a12" }}>

        <section id='contact-section' className='text-[80px] sm:text-[100px] md:text-[140px]'>CONTACT</section>

        <div id='socials' className='flex flex-col justify-end'>
          <div className='flex justify-center gap-[10px] sm:gap-[30px] px-[2rem] sm:px-0 pt-[4rem] z-[1]'>

            <div className='icons instagram p-[10px] sm:p-[16px] sm:w-[4.5%]' onClick={() => window.open("https://www.instagram.com/aniiruddhaa_/", '_blank')}>
              <img id="instagram" src="/socials/instagram.png" alt="ani-instagram" />
            </div>

            <div className='icons linkedin p-[10px] sm:p-[16px] sm:w-[4.5%]' onClick={() => window.open("https://www.linkedin.com/in/aniruddha-thakur-b36482259/", '_blank')}>
              <img src="/socials/linkedin.png" alt="ani-linkedin" />
            </div>

            <div className='icons github p-[10px] sm:p-[16px] sm:w-[4.5%]' onClick={() => window.open("https://github.com/aniruddha76", '_blank')}>
              <img src="/socials/github.png" alt="ani-github" />
            </div>

            <div className='icons discord p-[10px] sm:p-[16px] sm:w-[4.5%]' onClick={() => window.open("https://discordapp.com/users/raptor1570", '_blank')}>
              <img src="/socials/discord.png" alt="ani-discord" />
            </div>

            <div className='icons email p-[10px] sm:p-[16px] sm:w-[4.5%]' onClick={() => open('mailto:aniruddhathakur76@gmail.com', '_blank')}>
              <img src="/socials/email.png" alt="ani-email" />
            </div>

          </div>
        </div>

        <Contactform />

        <div className='footer h-24 flex justify-center items-center bg-black text-[#494949] font-medium text-xs sm:text-base'>
          <p>Made with &lt;/&gt; by Aniruddha Thakur &copy; TwentyTwentyFour</p>
        </div>

      </div>
    </div>
  )
}

export default App
