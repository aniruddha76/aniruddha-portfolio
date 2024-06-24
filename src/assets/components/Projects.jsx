import Techstack from "./Techstack";

function Projects () {
    return (
        <div style={{ backgroundImage: "linear-gradient(-180deg, #1a1527, #0e0c16 88%, #0e0c16 99%)" }}>

        <section id="projects" className='pl-[40%] sm:pl-[50%] md:pl-[97%] text-[80px] sm:text-[100px] md:text-[140px]'>PROJECTS</section>

        <div id='work' className='p-10'>

          <div className="relative pt-20 sm:pt-0 sm:flex py-5 sm:py-0">
            <div className="relative sm:px-14 cursor-pointer" onClick={() => window.open('https://github.com/Bishwajitpvt/StudiousRepo')} >
              <img src="/studiosrepo.jpeg" alt="studiosrepo" className="sm:h-52 sm:w-96 brightness-50" style={{ boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)" }} />
              <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                <p>Studios Repo</p>
                <p className="font-[300]">Student Notes Management System <br />Using React</p>
                <hr className='bg-white border-[.5px] rounded w-[200px]' />
                <p className='font-[100]'>01 &rarr;</p>
              </div>
            </div>
          </div>

          <div className="relative grid pt-28 sm:flex sm:py-14 justify-end">
            <div className="project relative sm:px-14 sm:pr-[25rem] cursor-pointer" onClick={() => window.open('https://github.com/aniruddha76/insta-downloader')}>
              <img src="/instadownloader.png" alt="insta-downloader" className="sm:h-52 w-99 brightness-50" style={{ boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)" }} />
              <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                <p>Insta Downloader</p>
                <p className="font-[300]">Instagram Photos Downloader<br />Chrome Extension</p>
                <hr className='bg-white border-[.5px] rounded w-[200px]' />
                <p className='font-[100]'>02 &rarr;</p>
              </div>
            </div>

            <div className="sm:absolute sm:px-14 py-14 sm:py-0 sm:top-0 cursor-pointer" style={{ zIndex: 2 }} onClick={() => window.open('https://github.com/aniruddha76/express-share')}>
              <img src="/express-share.jpg" alt="express-share" className="h-52 w-52 brightness-50" style={{ boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)" }} />
              <div className="absolute bottom-10 sm:bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                <p>Express Share</p>
                <p className="font-[300]">File Sharing Application <br />Using Express and Multer</p>
                <hr className='bg-white border-[.5px] rounded w-[200px]' />
                <p className='font-[100]'>03 &rarr;</p>
              </div>
            </div>
          </div>

          <div className="relative sm:flex justify-between" style={{ paddingBottom: '3rem' }}>
            <div className="relative flex py-5 sm:py-0">
              <div className="relative sm:px-14 cursor-pointer" onClick={() => window.open('https://github.com/aniruddha76/twine-video-calling')}>
                <img src="/twine.png" alt="twine-video-calling" className="h-52 w-96 brightness-50" style={{ boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)" }} />
                <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                  <p>Twine Video Calling</p>
                  <p className="font-[300]">Video Calling Application <br />Using WebRTC</p>
                  <hr className='bg-white border-[.5px] rounded w-[200px]' />
                  <p className='font-[100]'>04 &rarr;</p>
                </div>
              </div>
            </div>

            <div className="relative sm:flex py-5 sm:py-0">
              <div className="relative sm:px-14 cursor-pointer" style={{ bottom: 0, zIndex: 2 }} onClick={() => window.open('https://github.com/aniruddha76/Beatbox')}>
                <img src="/beatbox.jpg" alt="beatbox-discord" className="h-52 w-96 brightness-50" style={{ boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)" }} />
                <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                  <p>BeatBox</p>
                  <p className="font-[300]">Discord Music Application <br />Using Discord.JS</p>
                  <hr className='bg-white border-[.5px] rounded w-[200px]' />
                  <p className='font-[100]'>05 &rarr;</p>
                </div>
              </div>
            </div>
          </div>

          <div className='sm:px-40 pt-5 sm:py-5'>
            <div className="relative sm:px-14 sm:pr-[25rem] cursor-pointer" onClick={() => window.open('https://github.com/aniruddha76/Blockify')}>
              <img src="/blockyfy.png" alt="blockyfy" className="sm:h-52 sm:w-99 brightness-50" style={{ boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)" }} />
              <div className="absolute bottom-0 left-0 p-4 text-white" style={{ fontSize: '22px', fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                <p>Blockify</p>
                <p className="font-[300]">A Poweful Ad blocker<br />Chrome Extension</p>
                <hr className='bg-white border-[.5px] rounded w-[200px]' />
                <p className='font-[100]'>06 &rarr;</p>
              </div>
            </div>
          </div>

        </div>

        <Techstack />
      </div>
    )
}

export default Projects;