import './App.css'
import MyCodeBlock from './assets/components/Code'

function App() {

  return (
    <div style={{ backgroundColor: "transparent", fontFamily: "Roboto Condensed,Lato,Arial,sans-serif"}}>
      <nav id="main-nav" class="p-4 flex justify-between absolute top-0 left-0 w-full">

        <div className="text-white">Aniruddha<span>/></span></div>

        <ul className='flex flex-row text-white'>
          <li className='px-2'><a href='#start'>Start<span>/></span></a></li>
          <li className='px-2'><a href='#work'>Work<span>/></span></a></li>
          <li className='px-2'><a href='#education'>Education<span>/></span></a></li>
          <li className='px-2'><a href='#about'>About<span>/></span></a></li>
          <li className='px-2'><a href='#contact'>Contact<span>/></span></a></li>
        </ul>

      </nav>

      <header id="start">
        <div className="b-center bg-no-repeat bg-cover min-h-dvh" style={{backgroundImage: "url('./src/assets/images/bg.87635d9.webp')"}}>
          <div className='flex justify-center items-center min-h-dvh'>
            <div className='text-white fle'>
              <h1>Hi, My name is Aniruddha Thakur</h1>
              <h1>I design and develop</h1>
            </div>
          </div>
        </div>
      </header>

      <div id='work'>
        <h1>work section</h1>
      </div>
      
      <div id='education'>
        <h1>education section</h1>
      </div>
      
      <div id='about'>
        <h1>about section</h1>
        <MyCodeBlock />
      </div>
      
      <div id='contact'>
        <h1>contact section</h1>
      </div>
    </div>
  )
}

export default App
