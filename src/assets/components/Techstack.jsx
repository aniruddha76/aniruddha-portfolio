function Techstack () {
    return(
        <div id='tech-stack'>
          <section id='techstack' className='pl-[100%] sm:pl-[50%] md:pl-[100%] text-[50px] sm:text-[100px] md:text-[140px]'>TECHSTACK</section>

          <div className='flex justify-center pt-[50px] sm:pt-[140px]'>
            <div id='tech-stack' className='w-[30rem] sm:w-[60rem]' style={{ zIndex: 5, boxShadow: "0 -4px 100px rgba(0, 0, 0, 0.5)", height: "auto", backgroundImage: "linear-gradient(-180deg, #1a1527, #0e0c16 88%, #0e0c16 99%)" }}>
              <div id='row-1' className='grid grid-cols-2 gap-6 sm:gap-0 p-5 sm:p-3 sm:flex sm:flex-row justify-evenly sm:py-14'>
                <div id='image-container' className='tooltip p-5 h-40 w-40'>
                  <img src="./src/assets/images/logo/html.png" />
                  <span className='tooltiptext'>HTML</span>
                </div>

                <div id='image-container' className='tooltip p-5 h-40 w-40'>
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

              <div id='rwo-2' className='grid grid-cols-2 pt-1 sm:pt-0 gap-6 sm:gap-0 px-5 sm:px-3 sm:flex sm:flex-row justify-evenly sm:pb-[3.5rem]'>
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

              <div id='rwo-3' className='grid grid-cols-2 pt-6 sm:pt-0 gap-6 sm:gap-0 px-5 sm:px-3 sm:flex sm:flex-row justify-evenly sm:pb-[3.5rem]'>
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

              <div id='rwo-4' className='grid grid-cols-2 pt-7 sm:pt-0 gap-6 sm:gap-0 px-5 sm:px-3 sm:flex sm:flex-row justify-evenly sm:pb-[3.5rem]'>
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

              <div id='rwo-5' className='grid grid-cols-2 pt-7 sm:pt-0 gap-6 sm:gap-0 px-5 sm:px-3 sm:flex sm:flex-row justify-evenly sm:pb-[3.5rem]'>
                <div id='image-container' className='tooltip h-40 w-40 p-5'>
                  <img src="./src/assets/images/logo/canvalogo.png" />
                  <span className='tooltiptext'>CANVA</span>
                </div>
              </div>
            </div>
          </div>

        </div>
    )
}

export default Techstack;