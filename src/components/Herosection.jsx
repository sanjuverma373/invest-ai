import React from 'react'
import aiStockImg from '../assets/images/ai-stocks.webp'
import { Arrow_left, Arrow_right, Bag, Message, Setting, Trade } from './Icons'

const Herosection = () => {
        return (
                <div className=' pt-[20px] sm:pt-[70px] md:pt-[200px] lg:pt-[309px]'>
                        <div className=' container mx-auto px-3'>
                                <h1 className=' text-white font-orbitron font-normal text-3xl md:text-4xl lg:text-5xl leading-[45px] lg:leading-[67.2px] text-center mx-auto max-w-[978px] pb-[24px] md:pb-[51px]'>How to <span className=' text-[#98BD42] font-bold'>Benefit</span> By Investing In AI Stocks For <span className=' text-[#98BD42] font-bold'>High Returns</span></h1>
                                <div className=' flex items-center justify-center'>
                                        <div className=' bg-[#151515] max-w-[1140px] min-h-[568px] md:min-h-[620px] p-[20px] lg:p-[83px_92px_72px_115px] w-full relative '>
                                                <div className=' absolute left-[40%] hidden lg:block'>
                                                        <div className=' relative flex items-center justify-center '>
                                                                <img className=' mt-[31px] max-w-[236px] min-h-[236px] w-full object-cover' src={aiStockImg} alt="aiStockImg" />
                                                                <span className=' absolute top-[19%] left-[-27%]'><Arrow_left /></span>
                                                                <span className=' absolute top-[19%] right-[-27%]'><Arrow_right/></span>
                                                        </div>
                                                </div>
                                                <div>
                                                        <div>
                                                                <div className=' flex flex-col lg:flex-row items-center justify-between'>
                                                                      <div className=' flex items-center '>
                                                                        <h3 className=' font-openSans font-bold text-base md:text-xl text-white max-w-[194px] flex '>Artificial Intelligence Stocks</h3>
                                                                        <span><Trade/></span>
                                                                      </div>
                                                                      <div className=' flex items-center pt-6 lg:pt-0 lg:mr-[6%] gap-3'>
                                                                        <span><Setting/></span>
                                                                        <h3 className=' font-openSans font-bold text-base md:text-xl text-white max-w-[194px] flex '>AI Revolution!</h3>
                                                                      </div>
                                                                </div>
                                                                <div className=' flex items-center flex-col lg:flex-row justify-between   mt-8 lg:mt-[138px]'>
                                                                      <div className=' flex items-center'>
                                                                        <h3 className=' font-openSans font-bold text-base md:text-xl text-white max-w-[194px] flex '>Technological Breakthroughs</h3>
                                                                        <span><Bag/></span>
                                                                      </div>
                                                                      <div className=' flex items-center pt-6 lg:pt-0 gap-3'>
                                                                        <span><Message/></span>
                                                                        <h3 className=' font-openSans font-bold text-base md:text-xl text-white max-w-[194px] flex '>Artificial Intelligence </h3>
                                                                      </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className='border-l-[8px] border-solid border-[#98BD42] mt-[30px] md:mt-[78px] px-4 md:px-[32px] py-3 md:py-[26px] bg-gradient'>
                                                        <p className=' text-white font-openSans font-normal text-base md:text-lg'>As per our research and data evaluation from experts, the price of these AI Stocks will rise over time. Today's Investment can give a return of more than 130.66% in 2024.</p>
                                                </div>
                                        </div>
                                </div>

                        </div>
                </div>
        )
}

export default Herosection
