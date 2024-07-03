function Projectcard(props) {
    return (
        <div class="relative flex w-full max-w-[24rem] flex-col rounded-xl bg-[#0a0911] bg-clip-border text-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-4">
            <div
                class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src={props.image} className="h-[200px] object-cover" />
                <div
                    class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                </div>
            </div>
            <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                    <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                        {props.title}
                    </h5>

                </div>
                <p class="block font-sans text-base antialiased font-light leading-relaxed">
                    {props.description}
                </p>

                <center>
                    <div class="inline-flex flex-wrap items-center gap-3 mt-8 group">
                        <span
                            class="cursor-pointer rounded-full border border-white bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-[#b1b1b1] hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
                            onClick={() => window.open(`${props.live}`, '_blank')}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-5 h-5">
                                <path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
                            </svg>
                        </span>
                        <span
                            class="cursor-pointer rounded-full border border-white bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-[#b1b1b1] hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
                            onClick={() => window.open(`${props.code}`, '_blank')}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-5 h-5">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.599.113.793-.261.793-.579 0-.287-.011-1.245-.016-2.25-3.338.725-4.042-1.61-4.042-1.61-.545-1.383-1.332-1.751-1.332-1.751-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.833 2.807 1.303 3.492.997.108-.774.418-1.303.76-1.603-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.382 1.237-3.221-.124-.303-.536-1.527.117-3.177 0 0 1.008-.323 3.3 1.23a11.483 11.483 0 013.002-.403c1.019.005 2.046.137 3.003.403 2.291-1.553 3.297-1.23 3.297-1.23.654 1.65.242 2.874.119 3.177.771.839 1.236 1.911 1.236 3.221 0 4.61-2.803 5.622-5.474 5.921.43.372.813 1.104.813 2.226 0 1.607-.014 2.905-.014 3.302 0 .32.192.696.799.578C20.565 21.797 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </span>
                    </div>
                </center>
            </div>
            
        </div>
    )
}

export default Projectcard;