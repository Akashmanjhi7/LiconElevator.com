import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="backdrop-blur-lg sticky top-0 bg-white  w-full z-50">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-0 ">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <h1 className='font-black sm:text-[2vw] text-[2vh] uppercase text-highlight'>Licon Elevator</h1>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-12 text-lg">
            <li>
              <NavLink className="" to="/"> Home </NavLink>
            </li>

            <li>
              <NavLink className="" to="/about"> About </NavLink>
            </li>

           

            <li>
              <NavLink className="" to="/service"> Services </NavLink>
            </li>

            <li>
              <NavLink className="" to="/contact"> Contact</NavLink>
            </li>

            
          </ul>
        </nav>

       

          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

</header>
  )
}

export default Navbar
