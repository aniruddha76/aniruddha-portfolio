function Contactform() {
    return(
        <div className='flex justify-center text-white' style={{ fontFamily: 'Roboto Condensed,Lato,Arial,sans-serif' }}>
          <div class="flex w-full items-center">
            <div class="mx-auto w-full max-w-lg form-container">
              <center><h1 class="text-4xl font-medium">Let's Connect</h1></center>

              <form action="https://api.web3forms.com/submit" method='post' className="sm:mt-10">

                <input type="hidden" name="access_key" value="d3cd45bf-0d18-4988-9798-934bb5293495" />
                <div class="flex flex-col justify-between p-8 sm:p-0 sm:grid sm:gap-6 sm:grid-cols-2">
                  <div class="relative z-0 pb-4 sm:pb-0">
                    <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm  focus:border-purple-600 focus:outline-none focus:ring-0" placeholder=" " />
                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 peer-focus:dark:text-purple-500">Your name</label>
                  </div>
                  <div class="relative z-0 pb-4 sm:pb-0">
                    <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-purple-600 focus:outline-none focus:ring-0" placeholder=" " />
                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 peer-focus:dark:text-purple-500">Your email</label>
                  </div>
                  <div class="relative z-0 col-span-2">
                    <textarea name="message" rows="3" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-purple-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 peer-focus:dark:text-purple-500">Your message</label>
                  </div>
                </div>
                <center><button type="submit" class="mt-8 rounded-md px-10 py-2 text-white send-btn">Send Message</button></center>
              </form>
            </div>
          </div>
        </div>
    )
}

export default Contactform;