function About () {
    return(
        <div id='about' className='min-h-dvh bg-[#14121c] z-10] flex justify-center items-center'>
        <section id="aboutme" className='text-[80px] sm:text-[100px] md:text-[140px]'>ABOUTME</section>

        <div>
          <div className='flex flex-col sm:flex-row justify-center'>
            <div className='p-6' style={{ zIndex: 1 }}>
              <div id='border-class' className='flex flex-col sm:flex-row p-4'>
                <div className='sm:w-[290px] z=[4]'>
                  <img id='profile' src="/profile/aniruddha.jpg" alt="aniruddha-thakur-profile" />
                </div>

                <div className='text-white text-xl pt-4 sm:pt-0 sm:pl-[3rem] sm:w-[300px] md:w-[450px]' style={{ zIndex: 4, fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif', fontWeight: 400 }}>
                  <p>Hello! I'm Aniruddha Thakur, a passionate web developer and designer who thrives on creating stunning and intuitive frontend designs.</p>
                  <br />
                  <p>My journey in the digital world began with a fascination for how design and code can come together to create seamless user experiences.</p>
                  <br />
                  <p>As a web developer, I meticulously craft responsive and efficient code that brings my designs to life. My goal is to make every website not only look fantastic but also function flawlessly.</p>
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
    )
}

export default About