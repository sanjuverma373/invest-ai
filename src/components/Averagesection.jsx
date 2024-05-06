import React from 'react'
import google from '../assets/images/google.webp'
import adani from '../assets/images/adani.webp'
import company from '../assets/images/company.webp'
import relaince from '../assets/images/relaince.webp'
import samsung from '../assets/images/samsung.webp'
import spotify from '../assets/images/spotify.webp'
import stripe from '../assets/images/stripe.webp'
import tata from '../assets/images/tata.webp'
import tesla from '../assets/images/tesla.webp'

const Averagesection = () => {
     return (
          <div className=' pt-[30px] sm:pt-[60px] md:pt-[130px] lg:pt-[228px] pb-[30px] sm:pb-[60px] md:pb-[130px] lg:pb-[308px] overflow-x-clip'>
               <div className=' container mx-auto px-3'>
                    <div className=' grid lg:grid-cols-2 gap-[138px]'>
                         <div className=' flex justify-center flex-col'>
                              <h1 className=' text-white font-orbitron font-normal text-3xl md:text-4xl lg:text-5xl leading-[50px]  lg:leading-[67.2px] mx-auto lg:mx-0 max-w-[518px] pb-[30px] text-center lg:text-start'>Average Earnings of a Registered User From a <span className=' text-[#98BD42] font-bold'>Deposit of $250 to 521$</span></h1>
                              <div className=' flex justify-center lg:justify-start '>
                                   <button className=' font-poppins text-black text-base font-medium bg-[#98BD42] px-[22px] py-[14px]'>Register Now</button></div>
                         </div>
                         <div className=' lg:block hidden'>
                              <div className='flex items-center gap-6'>
                                   <div className=' flex lg:flex-col'>
                                        <div className=' bg-white max-w-[145px] flex items-center justify-center min-h-[134px] mb-[18px] cursor-pointer'>
                                             <a href="https://www.google.co.in/" target='_blank'><img src={google} alt="google" /></a>
                                        </div>
                                        <div className=' bg-white max-w-[145px] flex items-center justify-center min-h-[134px] mb-[18px] cursor-pointer'>
                                             <a href="https://open.spotify.com/" target='_blank'><img src={spotify} alt="spotify" /></a>
                                        </div>
                                        <div className=' bg-white max-w-[145px] flex items-center justify-center min-h-[134px] mb-[18px] cursor-pointer'>
                                             <a href="https://www.samsung.com/in/" target='_blank'><img src={samsung} alt="samsung" /></a>
                                        </div>
                                        <div className=' bg-white max-w-[145px] flex items-center justify-center min-h-[134px] mb-[18px] cursor-pointer'>
                                             <a href="https://stripe.com/in" target='_blank'><img src={stripe} alt="stripe" /></a>
                                        </div>
                                   </div>
                                   <div className=' flex lg:flex-col'>
                                        <div className=' bg-white max-w-[145px] flex items-center justify-center min-h-[134px] mb-[18px] cursor-pointer'>
                                             <a href="https://stackoverflow.com/questions/70552532/i-cant-get-localhost3001-api-notes-to-display-anything" target='_blank'><img src={adani} alt="adani" /></a>
                                        </div>
                                        <div className=' bg-white max-w-[145px] flex items-center justify-center min-h-[134px] mb-[18px] cursor-pointer'>
                                             <a href="https://www.tatamotors.com/" target='_blank'><img src={tata} alt="tata" /></a>
                                        </div>
                                        <div className=' bg-white max-w-[145px] flex items-center justify-center min-h-[134px] mb-[18px] cursor-pointer'>
                                             <a href="https://www.tesla.com/" target='_blank'><img src={tesla} alt="samsung" /></a>
                                        </div>
                                   </div>
                                   <div className=' flex lg:flex-col'>
                                        <div className=' bg-white max-w-[145px] flex items-center justify-center min-h-[134px] mb-[18px] cursor-pointer'>
                                             <a href="https://en.wikipedia.org/wiki/Company" target='_blank'><img src={company} alt="company" /></a>
                                        </div>
                                        <div className=' bg-white max-w-[145px] flex items-center justify-center min-h-[134px] mb-[18px] cursor-pointer'>
                                             <a href="https://www.ril.com/" target='_blank'><img src={relaince} alt="relaince" /></a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className=' lg:hidden block  pt-8 lg:pt-0'>
                    <div class="slider">
                         <div class="slide-track">
                              <div class="slide flex items-center justify-center ">
                                   <img src={google} alt="google" />
                              </div>
                              <div class="slide flex items-center justify-center">
                                   <img src={spotify} alt="spotify" />
                              </div>
                              <div class="slide flex items-center justify-center">
                              <img src={samsung} alt="samsung" />
                              </div>
                              <div class="slide flex items-center justify-center">
                              <img src={stripe} alt="stripe" />
                              </div>
                              <div class="slide flex items-center justify-center">
                              <img src={adani} alt="adani" />
                              </div>
                              <div class="slide flex items-center justify-center">
                              <img src={tata} alt="tata" />
                              </div>                             
                              <div class="slide flex items-center justify-center">
                              <img src={company} alt="company" />
                              </div>
                              <div class="slide flex items-center justify-center ">
                              <img src={relaince} alt="relaince" />
                              </div>
                              <div class="slide flex items-center justify-center ">
                                   <img src={google} alt="google" />
                              </div>
                              <div class="slide flex items-center justify-center">
                                   <img src={spotify} alt="spotify" />
                              </div>
                              <div class="slide flex items-center justify-center">
                              <img src={samsung} alt="samsung" />
                              </div>
                              <div class="slide flex items-center justify-center">
                              <img src={stripe} alt="stripe" />
                              </div>
                              <div class="slide flex items-center justify-center">
                              <img src={adani} alt="adani" />
                              </div>
                              <div class="slide flex items-center justify-center">
                              <img src={tata} alt="tata" />
                              </div>                             
                              <div class="slide flex items-center justify-center">
                              <img src={company} alt="company" />
                              </div>
                              <div class="slide flex items-center justify-center ">
                              <img src={relaince} alt="relaince" />
                              </div>
                              
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Averagesection
