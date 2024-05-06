import React from 'react'
import aiStockImg from '../assets/images/ai-stocks.webp'
import { Arrow_left, Arrow_right, Setting, Trade } from './Icons'

const Herosection = () => {
        return (
                <div className=' pt-[309px]'>
                        <div className=' container mx-auto px-3'>
                                <h1 className=' text-white font-orbitron font-normal text-5xl text-center mx-auto leading-[67.2px] max-w-[978px] pb-[51px]'>How to <span className=' text-[#98BD42] font-bold'>Benefit</span> By Investing In AI Stocks For <span className=' text-[#98BD42] font-bold'>High Returns</span></h1>
                                <div className=' flex items-center justify-center'>
                                        <div className=' bg-[#151515] max-w-[1140px] min-h-[620px] p-[30px] lg:p-[83px_92px_72px_115px] w-full relative '>
                                                <div className=' relative flex items-center justify-center'>
                                                        <img className=' mt-[31px] max-w-[236px] min-h-[236px] w-full object-cover' src={aiStockImg} alt="aiStockImg" />
                                                        <span className=' absolute top-[19%] left-[30%]'><Arrow_left /></span>
                                                        <span className=' absolute top-[19%] right-[30%]'><Arrow_right/></span>
                                                </div>
                                                <div>
                                                        <div>
                                                                <div className=' flex items-center justify-between'>
                                                                      <div className=' flex items-center'>
                                                                        <h3 className=' font-openSans font-bold text-xl text-white max-w-[194px] flex '>Artificial Intelligence Stocks</h3>
                                                                        <span><Trade/></span>
                                                                      </div>
                                                                      <div className=' flex items-center'>
                                                                        <span><Setting/></span>
                                                                        <h3 className=' font-openSans font-bold text-xl text-white max-w-[194px] flex '>Artificial Intelligence Stocks</h3>
                                                                      </div>
                                                                </div>
                                                                <div className=' flex items-center justify-between mt-[138px]'>
                                                                      <div className=' flex items-center'>
                                                                        <h3 className=' font-openSans font-bold text-xl text-white max-w-[194px] flex '>Artificial Intelligence Stocks</h3>
                                                                        <span><Trade/></span>
                                                                      </div>
                                                                      <div className=' flex items-center'>
                                                                        <span><Setting/></span>
                                                                        <h3 className=' font-openSans font-bold text-xl text-white max-w-[194px] flex '>Artificial Intelligence Stocks</h3>
                                                                      </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </div>
                </div>
        )
}

export default Herosection
