import React from 'react'
import Footer from '../../components/footer/Footer'
import './contact.css'

function Contact() {
  return (
    <div className='contactroot'>
    <div className='contact'>
     <div className='contactHero'></div>
     
     <div className='container contact-con flex mt-10 mb-10'>
        <div className='cont-left '>
            <p className='text-3xl font-bold mb-5 text-orange-400 '>Write us a message</p>
            <form className='form-container'>
                <input className='input2' placeholder='Enter Name *' required/>
                <input className='input2' placeholder='Enter Email *' required/>
                <input className='input2' placeholder='Subject *' required/>
                <textarea className='textarea' placeholder='Write message'></textarea>
                <button className='bg-teal-500 md:self-start w-52 py-2 px-4 text-lg font-bold text-white rounded-md'>Send</button>
            </form>
        </div>
        <div className='cont-right'>
            <p className='text-3xl font-bold mb-5 text-orange-400 '>Reach us we are social also</p>
            <div className='incon-container  '>
              <p className='icon text-xl mb-5 text-gray-400' ><i class="fa-solid fa-map-location-dot"></i> Nakuru- Nairobi highway</p>
              <p className='icon text-xl mb-5 text-gray-400' ><i class="fa-solid fa-envelope-open-text"></i> Relax hotel@gmail.com</p>
              <p className='icon text-xl mb-5 text-gray-400' ><i class="fa-solid fa-phone-volume"></i> +254-735-673-826</p>
              <p className='icon text-xl mb-5 text-gray-400' ><i class="fa-solid fa-map-location-dot"></i> Nakuru- Nairobi highway</p>
            <div className='-ml-3'>
            <i class="fa-brands fa-facebook text-gray-400 text-2xl cursor-pointer"></i>
            <i class="fa-brands fa-instagram-square text-gray-400 text-2xl cursor-pointer"></i> 
            <i class="fa-brands fa-twitter-square text-gray-400 text-2xl cursor-pointer"></i>   
            <i class="fa-brands fa-linkedin text-gray-400 text-2xl cursor-pointer"></i>  
            </div>
            </div>
        </div>
     </div>
     <Footer/>
    </div>
    </div>
  )
}

export default Contact