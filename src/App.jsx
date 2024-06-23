import './App.css'
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

      <div id='about' style={{ height: "auto" }}>
        <section id="aboutme" className='pr-[5%] sm:pr-[20%] md:pr-[29%] text-[80px] sm:text-[100px] md:text-[140px]'>ABOUTME</section>

        <div className='min-h-dvh pt-[5rem]' style={{ backgroundColor: '#14121c', zIndex: 1 }}>
          <div className='flex flex-col sm:flex-row justify-center'>
            <div className='p-6' style={{ zIndex: 1 }}>
              <div id='border-class' className='flex flex-col sm:flex-row p-4'>
                <div className='sm:w-[290px] z=[4]'>
                  <img id='profile' src="./src/assets/images/profile/aniruddha.jpg" alt="aniruddha-thakur-profile" />
                </div>

                <div className='text-white text-xl pt-4 sm:pt-0 sm:pl-[3rem] sm:w-[500px]' style={{ zIndex: 4, fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 400 }}>
                  <p>
                    Hello! I'm Aniruddha Thakur, a passionate web developer and designer who thrives on creating stunning and intuitive frontend designs.
                  </p><br />
                  <p>
                    My journey in the digital world began with a fascination for how design and code can come together to create seamless user experiences.
                  </p>
                  <br />
                  <p>
                    As a web developer, I meticulously craft responsive and efficient code that brings my designs to life.
                    My goal is to make every website not only look fantastic but also function flawlessly.
                  </p>
                </div>
              </div>

              <div id='download-resume' className='py-1 flex sm:justify-end' >
                <button class="resume-btn w-[50%] sm:w-[20%]" id="resume-btn" onClick={function () { window.open('https://drive.google.com/file/d/1KXSYTf9NOupshEV5N9_UjJTxIq_SwdJI/view?usp=sharing', '_blank') }}>
                  <div className="sign">
                    <svg viewBox="0 0 640 512">
                      <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"></path>
                    </svg>
                  </div>

                  <div class="text">Resume</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='contact' className='min-h-dvh flex flex-col justify-between' style={{ backgroundColor: "#0c0a12" }}>
        <section id='contact-section' className='pl-[100%] sm:pl-[140%] md:pl-[155%] text-[80px] sm:text-[100px] md:text-[140px]'>CONTACT</section>

        <div id='socials' className='flex flex-col justify-end'>
          <div className='flex justify-center gap-[10px] sm:gap-[30px] px-[2rem] sm:px-0 pt-[4rem] z-[1]'>

            <div className='icons instagram p-[10px] sm:p-[16px] sm:w-[4.5%]' onClick={() => window.open("https://www.instagram.com/aniiruddhaa_/", '_blank')}>
              <img id="instagram" src="./src/assets/images/socials/instagram.png" alt="ani-instagram" />
            </div>

            <div className='icons linkedin p-[10px] sm:p-[16px] sm:w-[4.5%]' onClick={() => window.open("https://www.linkedin.com/in/aniruddha-thakur-b36482259/", '_blank')}>
              <img src="./src/assets/images/socials/linkedin.png" alt="ani-linkedin" />
            </div>

            <div className='icons github p-[10px] sm:p-[16px] sm:w-[4.5%]' onClick={() => window.open("https://github.com/aniruddha76", '_blank')}>
              <img src="./src/assets/images/socials/github.png" alt="ani-github" />
            </div>

            <div className='icons discord p-[10px] sm:p-[16px] sm:w-[4.5%]' onClick={() => window.open("https://discordapp.com/users/raptor1570", '_blank')}>
              <img src="./src/assets/images/socials/discord.png" alt="ani-discord" />
            </div>

            <div className='icons email p-[10px] sm:p-[16px] sm:w-[4.5%]' onClick={() => open('mailto:aniruddhathakur76@gmail.com', '_blank')}>
              <img src="./src/assets/images/socials/email.png" alt="ani-email" />
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
