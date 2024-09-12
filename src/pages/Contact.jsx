import React from 'react'
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <>

<section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2 text-highlight">Our Address</h3>
                    <p className="text-gray-600">121004 Nariyala - Chhaensa Rd, Ballabhgarh, Chhainssa, Haryana</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2 text-highlight">Phone Number</h3>
                    <p className="text-gray-600">+91- 99587 82489</p>
                </div>
               
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2 text-highlight">Email Address</h3>
                    <p className="text-gray-600">info@krishisparsh.com</p>
                </div>
            </div>
        </div>
    </section>



{/* scroll image */}
<div className="relative bg-cover bg-center h-96">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center h-full" style={{}}>
            <div className="text-center text-white p-8">
                <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
                <p className="mb-6">Get exclusive access to our latest updates and offers.</p>
                
            </div>
        </div>
    </div>   

    {/* form section  start*/}  
      <div className="flex justify-center items-center w-screen h-screen bg-white">

	<div className="container mx-auto my-4 px-4 lg:px-20">

		<div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
			<div className="flex">
				<h1 className="font-bold uppercase text-5xl">Send us a <br /> message</h1>
			</div>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="First Name*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Last Name*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Phone*" />
        </div>
				<div className="my-4">
					<textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div className="my-2 w-1/2 lg:w-1/4">
					<button className="uppercase text-sm font-bold tracking-wide bg-highlight text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
            Send Message
          </button>
				</div>
			</div>

			<div
				className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-highlight rounded-2xl">
				<div className="flex flex-col text-white">
					<h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
					<p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						tincidunt arcu diam,
						eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
					</p>

					<div className="flex my-4 w-2/3 lg:w-1/2">
						<div className="flex flex-col">
							<i className="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Main Office</h2>
              <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
            </div>
          </div>
          
          <div className="flex my-4 w-2/3 lg:w-1/2">
            <div className="flex flex-col">
              <i className="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Call Us</h2>
              <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
              <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
            </div>
          </div>
          
          <div className="flex my-4 w-2/3 lg:w-1/2">
            <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full bg-red-400 h-8 w-8 inline-block mx-1 text-center pt-1">
            <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
              <i className="fab fa-linkedin-in text-blue-900" />
            </a>
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
