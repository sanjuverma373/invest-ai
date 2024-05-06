import React from 'react'
import google from '../assets/images/google.webp'
import adani from '../assets/images/adani.webp'
import stocks from '../assets/images/ai-stocks.webp'
import company from '../assets/images/company.webp'
import relaince from '../assets/images/relaince.webp'
import samsung from '../assets/images/samsung.webp'
import spotify from '../assets/images/spotify.webp'
import stripe from '../assets/images/stripe.webp'
import tata from '../assets/images/tata.webp'

const Averagesection = () => {
  return (
    <div className=' pt-[228px] pb-[308px]'>
      <div className=' container mx-auto px-3'>
        <div className=' grid grid-cols-2 gap-[138px]'>
                <div className=' flex justify-center flex-col'>
                <h1 className=' text-white font-orbitron font-normal text-5xl leading-[67.2px] max-w-[518px] pb-[30px]'>Average Earnings of a Registered User From a <span className=' text-[#98BD42] font-bold'>Deposit of $250 to 521$</span></h1>
                <div className=' flex '>
                        <button className=' font-poppins text-black text-base font-medium bg-[#98BD42] px-[22px] py-[14px]'>Register Now</button></div>
                </div>
                <div className=' bg-white max-w-[145px] min-h-[134px]'>
                     <img src={} alt="" />
                </div>
        </div>
      </div>
    </div>
  )
}

export default Averagesection
