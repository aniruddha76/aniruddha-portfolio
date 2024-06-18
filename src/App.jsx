import './App.css'
import MyCodeBlock from './assets/components/Code'

function App() {

  return (
    <div style={{ backgroundColor: "transparent" }}>
      <nav id="main-nav" class="p-4 flex justify-between absolute top-0 left-0 w-full" style={{ fontFamily: "Roboto Condensed,Lato,Arial,sans-serif", fontSize: "22px", fontWeight: 700 }}>

        <div className="text-white">Aniruddha Thakur</div>

        <ul className='flex flex-row text-white'>
          <li className='px-2'><a href='#start'>Start<span> /></span></a></li>
          <li className='px-2'><a href='#work'>Projects<span> /></span></a></li>
          <li className='px-2'><a href='#tech-stack'>Tech Stack<span> /></span></a></li>
          <li className='px-2'><a href='#about'>About<span> /></span></a></li>
          <li className='px-2'><a href='#contact'>Contact<span> /></span></a></li>
        </ul>

      </nav>

      <header id="start">
        <div className="b-center bg-no-repeat bg-cover min-h-dvh" style={{ backgroundImage: "url('./src/assets/images/bg.87635d9.webp')" }}>
          <div className='flex justify-center items-center min-h-dvh'>
            <div className='text-white fle'>

              <h1>Hi, My name is Aniruddha Thakur</h1>
              <h1>I design and develop</h1>
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
              <img src="./src/assets/images/studiosrepo.jpeg" alt="studiosrepo" className="h-52 w-96 brightness-75" style={{boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)"}} />
              <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                <p>Studios<br />Repo</p>
                <hr style={{ fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700 }} />
              </div>
            </div>
          </div>

          <div className="relative flex py-14 justify-end">
            <div className="relative px-14" style={{ paddingRight: "25rem" }}>
              <img src="./src/assets/images/instadownloader.png" alt="studiosrepo" className="h-52 w-99 brightness-75" style={{boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)"}} />
              <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                <p>Insta<br />Downloader</p>
                <hr style={{ fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700 }} />
              </div>
            </div>

            <div className="absolute px-14" style={{ top: 0, zIndex: 2 }}>
              <img src="./src/assets/images/express-share.jpg" alt="studiosrepo" className="h-52 w-52 brightness-75" style={{boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)"}} />
              <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                <p>Express<br />Share</p>
                <hr style={{ fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700 }} />
              </div>
            </div>
          </div>

          <div className="relative flex py-3 justify-between" style={{ paddingBottom: '3rem' }}>
            <div className="relative flex">
              <div className="relative px-14">
                <img src="./src/assets/images/studiosrepo.jpeg" alt="studiosrepo" className="h-52 w-96 brightness-75" style={{boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)"}} />
                <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                  <p>Twine<br />Video Calling</p>
                  <hr style={{ fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700 }} />
                </div>
              </div>
            </div>

            <div className="relative flex">
              <div className="relative px-14" style={{ bottom: 0, zIndex: 2 }}>
                <img src="./src/assets/images/studiosrepo.jpeg" alt="studiosrepo" className="h-52 w-96 brightness-75" style={{boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)"}} />
                <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                  <p>BeatBox<br />Discord Bot</p>
                  <hr style={{ fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700 }} />
                </div>
              </div>
            </div>
          </div>

          <div className='px-40 py-5'>
          <div className="relative px-14" style={{paddingRight: "25rem"}}>
              <img src="./src/assets/images/instadownloader.png" alt="studiosrepo" className="h-52 w-99 brightness-75" style={{boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)"}} />
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

          <div className='flex justify-center' style={{ paddingTop: '145px' }}>
            <div style={{ zIndex: 5, boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)", width: "60rem", height: "50rem", backgroundImage: "linear-gradient(-180deg, #1a1527, #0e0c16 88%, #0e0c16 99%)" }}></div>
          </div>

        </div>
      </div>

      <div id='about'>
        <div className='p-4' style={{ backgroundColor: '#14121c' }}>
          {/* <section style={{
            color: '#221d35',
            content: '"ABOUTME"',
            fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif',
            fontSize: '140px',
            fontWeight: 700,
            paddingLeft: "30%",
            position: 'absolute',
            transform: 'translateX(-30%)'
          }}>ABOUTME</section> */}
          <div className='px-60'>
            <MyCodeBlock />
          </div>
        </div>
      </div>

      <div id='contact'>
        <h1>contact section</h1>
      </div>
    </div>
  )
}

export default App
