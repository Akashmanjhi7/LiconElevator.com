import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=" max-w-screen-xl mx-auto lg:grid lg:grid-cols-5 mt-8">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <img
      src="https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9mZmljZSUyMGJ1bGRpbmd8ZW58MHx8MHx8fDA%3D"
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span className="text-xs uppercase tracking-wide text-gray-500"> Call us </span>

          <Link href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
            0123456789
          </Link>
        </p>

        <ul className="mt-8 space-y-1 text-sm text-gray-700">
          <li>Monday to Friday: 10am - 5pm</li>
          <li>Weekend: 10am - 3pm</li>
        </ul>

        <ul className="mt-8 flex gap-6">
          <li>
            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Facebook</span>

              <img src="/logo/facebook.svg" alt="" />
             </Link>
          </li>

          <li>
            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Instagram</span>

              <img src="/logo/instagram.svg" className="size-6" alt="" />
             </Link>
          </li>

          <li>
            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Youtube</span>
              <img src="/logo/youtube.svg" className="size-6" alt="" />
             </Link>
          </li>

          <li>
            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">What's App</span>

              <img src="/logo/whatsapp.svg"  alt="" />
             </Link>
          </li>

          
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="#" className="text-gray-700 transition hover:opacity-75"> 1on1 Coaching  </Link>
            </li>

            <li>
              <Link href="#" className="text-gray-700 transition hover:opacity-75"> Company Review  </Link>
            </li>

            <li>
              <Link href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review  </Link>
            </li>

            <li>
              <Link href="#" className="text-gray-700 transition hover:opacity-75"> HR Consulting  </Link>
            </li>

            <li>
              <Link href="#" className="text-gray-700 transition hover:opacity-75"> SEO Optimisation  </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Legal</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="#" className="text-gray-700 transition hover:opacity-75"> About  </Link>
            </li>

            <li>
              <Link href="#" className="text-gray-700 transition hover:opacity-75"> Terms  </Link>
            </li>

            <li>
              <Link href="#" className="text-gray-700 transition hover:opacity-75"> Careers </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <Link href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions  </Link>
          </li>

          <li>
            <Link href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy  </Link>
          </li>

          <li>
            <Link href="#" className="text-gray-500 transition hover:opacity-75"> Cookies  </Link>
          </li>
        </ul>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
