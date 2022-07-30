import React from 'react'
import Stepper from '../stepper/Stepper'
import './heroaccomodation.css'

function HeroAccomodation() {
  return (
    <div className='accomodation flex items-center justify-center'>
     <div className='accod-detail-holder flex flex-col items-center py-10 px-3 rounded-md'>
         <h1 className='text-white text-2xl font-bold underline'>OUR ROOMS</h1>
         <p className='text-white text-center text-lg'>The hotel has 167 air conditioned rooms, of these 158 are Superior rooms, 2 rooms for guests with special needs, 4 Junior suites and 3 Executive suites. The Superior rooms are fitted with either a double bed or twin beds. Guests staying in the hotel have exclusive access to Wi-fi, the gym and swimming</p>
         <p className='text-orange-400 text-center font-semibold text-xl uppercase underline mt-5 '>Follow the following steps to became a member and get exclusive offers </p>
         <Stepper/>
     </div>
     
    </div>
  )
}

export default HeroAccomodation