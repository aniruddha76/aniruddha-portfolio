function Header (){
    return(
        <header id="start">
        <div className="min-h-dvh bg-[#11111b] pt-5">

          <div className='hidden sm:block blob h-[500px] w-[600px]'></div>

          <div className='min-h-dvh flex flex-col justify-center items-center'>
            <div className='text-white text-xl md:text-4xl w-[80%]' style={{ fontFamily: "Roboto Condensed,Lato,Arial,sans-serif" }}>
              <h1>Hey there!, I'm</h1>
              <div className='pt-5 pb-5 h-auto sm:pb-10 text-[2rem] sm:text-[3rem] md:text-[5rem] text-[#5918df]' style={{ fontWeight: 700 }}>
                Aniruddha Thakur
              </div>
              <div className='text-[2rem] sm:text-[3rem] md:text-[5rem]' style={{fontWeight: 700 }}>
                I Design & Code For Web
              </div>

              <div className='text-xl md:text-2xl py-5 sm:py-10'>
                I'm a web developer who loves crafting digital magic through
                vibrant concept art and sleek frontend designs. I Love fun Web UI, collaboration and turning idea's into reality.<br />
                <br />
                Simple content, clean design, and thoughtful interactions are my secret ingredients.
                Let’s build something amazing together!
              </div>

              <div className='pb-5 font-[500] text-[16px]'>
              <button class="letsTalkBtn"><a href="mailto:aniruddhathakur76@gmail.com">
                <p class="letsTalkBtn-text" >Let's Talk!</p>
                <span class="letsTalkBtn-BG"></span></a>
              </button>
            </div>

            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;