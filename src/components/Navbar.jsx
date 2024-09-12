import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header class="backdrop-blur-lg sticky top-0 bg-white  w-full z-50">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-0 ">
    <div class="flex h-16 items-center justify-between">
      <div class="flex-1 md:flex md:items-center md:gap-12">
        <h1 className='font-bold text-[2vw] uppercase text-highlight'>Licon Elevator</h1>
      </div>

      <div class="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-12 text-lg">
            <li>
              <Link class="" to="/"> Home </Link>
            </li>

            <li>
              <Link class="" to="/about"> About </Link>
            </li>

           

            <li>
              <Link class="" to="/service"> Services </Link>
            </li>

            <li>
              <Link class="" to="/contact"> Contact</Link>
            </li>

            
          </ul>
        </nav>

       

          <div class="block md:hidden">
            <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
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
