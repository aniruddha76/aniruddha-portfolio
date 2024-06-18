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
          <li className='px-2'><a href='#education'>Education<span> /></span></a></li>
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
        <div id='work'>

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

          <card>
            hiii
          </card>

        </div>

        <div id='education'>
          <h1>education section</h1>
        </div>
      </div>

      <div id='about'>
        <div className='p-4' style={{ backgroundColor: '#14121c' }}>
        <section style={{
            color: '#221d35',
            content: '"ABOUTME"',
            fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif',
            fontSize: '140px',
            fontWeight: 700,
            paddingLeft: "30%",
            position: 'absolute',
            transform: 'translateX(-30%)'
          }}>ABOUTME</section>
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
