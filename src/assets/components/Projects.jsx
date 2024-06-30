import Projectcard from "./Projectcard";
import Techstack from "./Techstack";

function Projects() {
  return (
    <div id='work' className='relative' style={{ backgroundImage: "linear-gradient(-180deg, #1a1527, #0e0c16 88%, #0e0c16 99%)" }}>

      <section id="projects" className='text-[70px] sm:text-[100px] md:text-[140px]'>PROJECTS</section>

      <div className='px-10 grid md:grid-cols-3 justify-center justify-items-center gap-5 w-full md:px-20'>

        <Projectcard
          image='/studiosrepo.jpeg'
          title='Studios Repo'
          description='A dynamic and user-friendly application built with React.js and MongoDB, designed to help students efficiently manage and organize their notes.'
          live='https://github.com/Bishwajitpvt/StudiousRepo?tab=readme-ov-file#output'
          code='https://github.com/Bishwajitpvt/StudiousRepo'
        />

        <Projectcard
          image='/instadownloader.png'
          title='Insta Downloader'
          description='A handy Chrome extension that allows users to effortlessly download Instagram photos and profile pictures.'
          live='https://github.com/aniruddha76/insta-downloader/releases'
          code='https://github.com/aniruddha76/insta-downloader'
        />

        <Projectcard
          image='/express-share.jpg'
          title='Express Share'
          description='A powerful file-sharing application built with Express.js and Multer, designed for quick and secure file transfers.'
          live='https://fileshare-express.vercel.app/'
          code='https://github.com/aniruddha76/Express-Share'
        />

        <Projectcard
          image='/twine.png'
          title='Twine Video Calling'
          description='An advanced video calling application developed with JavaScript and WebRTC, offering high-quality, real-time video communication.'
          live='https://twine-video-calling.vercel.app/'
          code='https://github.com/aniruddha76/twine-video-calling'
        />

        <Projectcard
          image='/beatbox.png'
          title='Beatbox Discord Bot'
          description='An engaging Discord music bot developed with Discord.js, designed to enhance your server experience with music and entertainment.'
          live='https://discord.com/oauth2/authorize?client_id=1213534821289033739&permissions=8&scope=bot'
          code='https://github.com/aniruddha76/Beatbox'
        />

        <Projectcard
          image='/blockyfy.png'
          title='Blockyfy'
          description='An essential Chrome extension designed to block intrusive ads on websites, enhancing browsing experience. '
          live='https://github.com/aniruddha76/Blockify'
          code='https://github.com/aniruddha76/Blockify'
        />

      </div>

      <Techstack />
    </div>
  )
}

export default Projects;