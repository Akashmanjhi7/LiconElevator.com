import React from 'react'
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="relative bg-cover bg-center h-96 mt-12 sm:mt-1">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center h-full" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4),rgba(0,0,0,.3)),url(https://blogthinkbig.com/wp-content/uploads/sites/4/2016/07/google-maps-trucos.jpg?fit=1920%2C1080)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}>
          <div className="text-center text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
            <p className="mb-6">Get exclusive access to our latest updates and offers.</p>

          </div>
        </div>
      </div>

      {/* form section  start*/}
      <div className="flex justify-center items-center w-full min-h-screen ">

        <div className="container mx-auto my-4 px-4 lg:px-20">

          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">Send us a <br /> <span className='text-highlight'>message</span></h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" name='First_Name' required placeholder="First Name*" />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" name='Last_Name' required placeholder="Last Name*" />

              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email" name='Email' required placeholder="Email*" />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number" name='Phone' required placeholder="Phone*" />
            </div>
            <div className="my-4">
              <textarea placeholder="Message*" name='Message' required className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button type='submit' className="uppercase text-sm font-bold tracking-wide bg-highlight text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>

          <div
            className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-highlight rounded-2xl">
            <div className="flex flex-col text-white">
              {/* <h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1> */}
              <p className="">Contact Licon Elevator for all inquiries, service requests, and support. Our team is ready to assist you promptly and professionally.
              </p>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Main Office</h2>
                  <p className="">C-186, Gali No-12, Roshan Nagar, Faridabad, Haryana-121003</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col lg:w-full ">
                  <h2 className="text-2xl">Contact</h2>
                  <p className="">Tel: 9582541315</p>

                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2 gap-2">
                {/* <a href="#" target="_blank" rel="noreferrer" className="rounded-full  h-8 w-8  flex justify-center items-center   text-center">
            <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="rounded-full  h-8 w-8  flex justify-center items-center   text-center">
            <FaFacebook />
            </a> */}


              </div>
            </div>
          </div>
        </div>

      </div>


      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">

      </div>
    </>
  )
}

export default Contact
