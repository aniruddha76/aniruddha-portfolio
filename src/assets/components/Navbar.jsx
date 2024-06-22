import react, {useState} from "react"

function Navbar() {

    const[isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    } 

    return (
        <nav id="main-nav" class="p-4 flex justify-between absolute top-0 w-full sm:w-full text-[22px] font-bold z-[999]" style={{ fontFamily: "Roboto Condensed,Lato,Arial,sans-serif" }}>

            <div className="text-white"></div>

            <div>
                <ul className='hidden sm:flex text-white'>
                    <li className='px-2'><a href='#start'>Start<span className='nav-span'> /&gt;</span></a></li>
                    <li className='px-2'><a href='#work'>Projects<span className='nav-span'> /&gt;</span></a></li>
                    <li className='px-2'><a href='#tech-stack'>Tech Stack<span className='nav-span'> /&gt;</span></a></li>
                    <li className='px-2'><a href='#about'>About<span className='nav-span'> /&gt;</span></a></li>
                    <li className='px-2'><a href='#contact'>Contact<span className='nav-span'> /&gt;</span></a></li>
                </ul>
            </div>

            <div className="hamburger flex flex-col sm:hidden justify-between w-[40px] h-[20px]" onClick={toggleMenu}>
                <span className="bar bg-white  border-solid rounded border-2 w-[40%]"></span>
                <span className="bar bg-white  border-solid rounded border-2 w-[80%]"></span>
                <span className="bar bg-white  border-solid rounded border-2 w-[60%]"></span>     
            </div>

            <div
                className={`mobile-menu w-full absolute bg-[#11111b] top-12 left-0 flex justify-center transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "max-h-[500px] p-5 shadow-xl" : "max-h-0 p-0"
                } overflow-hidden`}
            ><ul className='flex flex-col text-white items-center'>
                    <li className='py-2'><a href='#start'>Start<span className='nav-span'> /&gt;</span></a></li>
                    <li className='py-2'><a href='#work'>Projects<span className='nav-span'> /&gt;</span></a></li>
                    <li className='py-2'><a href='#tech-stack'>Tech Stack<span className='nav-span'> /&gt;</span></a></li>
                    <li className='py-2'><a href='#about'>About<span className='nav-span'> /&gt;</span></a></li>
                    <li className='py-2'><a href='#contact'>Contact<span className='nav-span'> /&gt;</span></a></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar