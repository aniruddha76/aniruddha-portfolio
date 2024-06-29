import Contactform from "./Contactform";

function Contact () {
    return(
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
    )
}

export default Contact;