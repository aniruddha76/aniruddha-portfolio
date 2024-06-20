import './App.css'
import MyCodeBlock from './assets/components/Code'

function App() {

  return (
    <div style={{ backgroundColor: "transparent" }}>
      <nav id="main-nav" class="p-4 flex justify-between absolute top-0 left-0 w-full" style={{ zIndex: 999, fontFamily: "Roboto Condensed,Lato,Arial,sans-serif", fontSize: "22px", fontWeight: 700 }}>

        <div className="text-white"></div>

        <ul className='flex flex-row text-white'>
          <li className='px-2'><a href='#start'>Start<span className='nav-span'> /&gt;</span></a></li>
          <li className='px-2'><a href='#work'>Projects<span className='nav-span'> /&gt;</span></a></li>
          <li className='px-2'><a href='#tech-stack'>Tech Stack<span className='nav-span'> /&gt;</span></a></li>
          <li className='px-2'><a href='#about'>About<span className='nav-span'> /&gt;</span></a></li>
          <li className='px-2'><a href='#contact'>Contact<span className='nav-span'> /&gt;</span></a></li>
        </ul>

      </nav>

      <header id="start">
        <div className="b-center bg-no-repeat bg-cover min-h-dvh" style={{ backgroundColor: "#11111b" }}>
          <div className='blob' style={{ height: '500px', width: '600px' }}></div>
          <div className='min-h-dvh px-64' style={{ paddingTop: "6rem", paddingBottom: 0 }}>
            <div className='text-white text-4xl' style={{ fontFamily: "Roboto Condensed,Lato,Arial,sans-serif" }}>
              <h1>Hey there!, I'm</h1>
              <div className='py-5' style={{ fontSize: '5rem', fontWeight: 700 }}>
                Aniruddha Thakur
              </div>
              <div style={{ fontSize: '5rem', fontWeight: 700, paddingTop: '1.25rem' }}>
                I Design & Code For Web
              </div>

              <div className='text-2xl py-10'>
                I'm a web developer who loves crafting digital magic through
                vibrant concept art and sleek frontend designs. I Love fun Web UI, collaboration and turning idea's into reality.<br />
                <br />
                Simple content, clean design, and thoughtful interactions are my secret ingredients.
                Let’s build something amazing together!
              </div>

            </div>

            <div style={{ fontWeight: 500 }}>
              <button class="letsTalkBtn"><a href="mailto:aniruddhathakur76@gmail.com">
                <p class="letsTalkBtn-text" >Let's Talk!</p>
                <span class="letsTalkBtn-BG"></span></a>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div style={{ backgroundImage: "linear-gradient(-180deg, #1a1527, #0e0c16 88%, #0e0c16 99%)" }}>

        <section style={{
          color: '#221d35',
          content: '"PROJECTS"',
          fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif',
          fontSize: '140px',
          fontWeight: 700,
          paddingLeft: "97%",
          position: 'absolute',
          transform: 'translateX(-30%)'
        }}>PROJECTS</section>

        <div id='work' className='p-10'>

          <div className="relative flex">
            <div className="relative px-14" >
              <img src="./src/assets/images/studiosrepo.jpeg" alt="studiosrepo" className="h-52 w-96 brightness-75" style={{ boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)" }} />
              <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                <p>Studios<br />Repo</p>
                <hr style={{ fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700 }} />
              </div>
            </div>
          </div>

          <div className="relative flex py-14 justify-end">
            <div className="relative px-14" style={{ paddingRight: "25rem" }}>
              <img src="./src/assets/images/instadownloader.png" alt="studiosrepo" className="h-52 w-99 brightness-75" style={{ boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)" }} />
              <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                <p>Insta<br />Downloader</p>
                <hr style={{ fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700 }} />
              </div>
            </div>

            <div className="absolute px-14" style={{ top: 0, zIndex: 2 }}>
              <img src="./src/assets/images/express-share.jpg" alt="studiosrepo" className="h-52 w-52 brightness-75" style={{ boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)" }} />
              <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                <p>Express<br />Share</p>
                <hr style={{ fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700 }} />
              </div>
            </div>
          </div>

          <div className="relative flex py-3 justify-between" style={{ paddingBottom: '3rem' }}>
            <div className="relative flex">
              <div className="relative px-14">
                <img src="./src/assets/images/studiosrepo.jpeg" alt="studiosrepo" className="h-52 w-96 brightness-75" style={{ boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)" }} />
                <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                  <p>Twine<br />Video Calling</p>
                  <hr style={{ fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700 }} />
                </div>
              </div>
            </div>

            <div className="relative flex">
              <div className="relative px-14" style={{ bottom: 0, zIndex: 2 }}>
                <img src="./src/assets/images/studiosrepo.jpeg" alt="studiosrepo" className="h-52 w-96 brightness-75" style={{ boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)" }} />
                <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                  <p>BeatBox<br />Discord Bot</p>
                  <hr style={{ fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700 }} />
                </div>
              </div>
            </div>
          </div>

          <div className='px-40 py-5'>
            <div className="relative px-14" style={{ paddingRight: "25rem" }}>
              <img src="./src/assets/images/instadownloader.png" alt="studiosrepo" className="h-52 w-99 brightness-75" style={{ boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)" }} />
              <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                <p>Blockify<br />Chrome Extension</p>
                <hr style={{ fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700 }} />
              </div>
            </div>
          </div>

        </div>

        <div id='tech-stack'>
          <section style={{
            color: '#221d35',
            content: '"TEHSTACK"',
            fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif',
            fontSize: '140px',
            fontWeight: 700,
            paddingLeft: "100%",
            position: 'absolute',
            transform: 'translateX(-50%)'
          }}>TECHSTACK</section>

          <div className='flex justify-center' style={{ paddingTop: '143px' }}>
            <div id='tech-stack' style={{ zIndex: 5, boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)", width: "60rem", height: "auto", backgroundImage: "linear-gradient(-180deg, #1a1527, #0e0c16 88%, #0e0c16 99%)" }}>
              <div id='row-1' className='flex justify-evenly py-14'>
                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/html.png" />
                  <span className='tooltiptext'>HTML</span>
                </div>

                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/css.png" />
                  <span className='tooltiptext'>CSS</span>
                </div>

                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/js.png" />
                  <span className='tooltiptext'>JAVASCRIPT</span>
                </div>

                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/bootstraplogo.png" />
                  <span className='tooltiptext'>BOOTSTRAP</span>
                </div>
              </div>

              <div id='rwo-2' className='flex justify-evenly' style={{ paddingBottom: '3.5rem' }}>
                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/reactlogo.png" />
                  <span className='tooltiptext'>REACT</span>
                </div>

                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/nodejs.png" />
                  <span className='tooltiptext'>NODE JS</span>
                </div>

                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/typescript.png" />
                  <span className='tooltiptext'>TYPESCRIPT</span>
                </div>

                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/tailwind.png" />
                  <span className='tooltiptext'>TAILWIND</span>
                </div>
              </div>

              <div id='rwo-3' className='flex justify-evenly' style={{ paddingBottom: '3.5rem' }}>
                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/express.png" />
                  <span className='tooltiptext'>EXPRESS JS</span>
                </div>

                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/electronlogo.svg" />
                  <span className='tooltiptext'>ELECTRON</span>
                </div>

                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/git.png" />
                  <span className='tooltiptext'>GIT</span>
                </div>

                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/githublogo.png" />
                  <span className='tooltiptext'>GITHUB</span>
                </div>
              </div>

              <div id='rwo-4' className='flex justify-evenly' style={{ paddingBottom: '3.5rem' }}>
                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/discord.png" />
                  <span className='tooltiptext'>DISCORD JS</span>
                </div>

                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/vercel.png" />
                  <span className='tooltiptext'>VERCEL</span>
                </div>

                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/wordpress.png" />
                  <span className='tooltiptext'>WORDPRESS</span>
                </div>

                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/figma.png" />
                  <span className='tooltiptext'>FIGMA</span>
                </div>
              </div>

              <div id='rwo-5' className='flex justify-evenly' style={{ paddingBottom: '3.5rem' }}>
                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/canvalogo.png" />
                  <span className='tooltiptext'>CANVA</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id='about' style={{ height: "auto" }}>
        <section style={{
          color: '#221d35',
          content: '"ABOUTME"',
          fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif',
          fontSize: '140px',
          fontWeight: 700,
          paddingRight: "28%",
          position: 'absolute',
          transform: 'translateX(-40%) rotate(-90deg)'
        }}>ABOUTME</section>

        <div className='justify-center min-h-dvh' style={{ paddingTop: '5rem', backgroundColor: '#14121c', zIndex: 1 }}>
          <div className='flex justify-center'>
            <div className='p-6' style={{ zIndex: 1 }}>
              <div id='border-class' className='flex p-4'>
                <div style={{ width: '290px', zIndex: 4 }}>
                  <img id='profile' src="./src/assets/images/profile/aniruddha.jpg" alt="aniruddha-thakur-profile" />
                </div>

                <div className='text-white text-xl' style={{ zIndex: 4, paddingLeft: '3rem', width: '500px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 400 }}>
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

              <div id='download-resume' className='py-1 flex justify-end' >
                <button class="resume-btn" id="resume-btn" onClick={function () { window.open('https://drive.google.com/file/d/1KXSYTf9NOupshEV5N9_UjJTxIq_SwdJI/view?usp=sharing', '_blank') }}>
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
        <section style={{
          color: '#221d35',
          content: '"CONTACT"',
          fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif',
          fontSize: '140px',
          fontWeight: 700,
          paddingLeft: "155%",
          position: 'absolute',
          transform: 'translateX(-50%)'
        }}>CONTACT</section>

        <div id='socials' className='flex flex-col justify-end'>
          <div className='flex justify-center' style={{ paddingTop: "4rem", zIndex: 1, gap: "30px" }}>

            <div className='icons instagram' onClick={() => window.open("https://www.instagram.com/aniiruddhaa_/")}>
              <img id="instagram" src="./src/assets/images/socials/instagram.png" alt="ani-instagram" />
            </div>

            <div className='icons linkedin' onClick={() => window.open("https://www.linkedin.com/in/aniruddha-thakur-b36482259/")}>
              <img src="./src/assets/images/socials/linkedin.png" alt="ani-linkedin" />
            </div>

            <div className='icons github' onClick={() => window.open("https://github.com/aniruddha76")}>
              <img src="./src/assets/images/socials/github.png" alt="ani-github" />
            </div>

            <div className='icons discord' onClick={() => window.open("https://discordapp.com/users/raptor1570")}>
              <img src="./src/assets/images/socials/discord.png" alt="ani-discord" />
            </div>

            <div className='icons email' onClick={() => open('aniruddhathakur76@gmail.com')}>
              <img src="./src/assets/images/socials/email.png" alt="ani-email" />
            </div>

          </div>
        </div>
        
        <div className='footer h-24 flex justify-center items-center w-full'>
          <p>Made with &lt;/&gt; by Aniruddha Thakur &copy; TwentyTwentyFour</p>
        </div>

      </div>
    </div>
  )
}

export default App
