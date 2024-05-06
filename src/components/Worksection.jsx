import React from 'react'
import { Circle, Linec, Linelr } from './Icons'

const Worksection = () => {
        return (
                <div className=' pt-[228px] pb-[60px]'>
                        <div className=' container mx-auto px-3'>
                                <h1 className=' text-white font-orbitron font-normal text-5xl text-center mx-auto leading-[67.2px] pb-4'>How it <span className=' text-[#98BD42] font-bold'>Works</span></h1>
                                <p className=' font-openSans font-normal text-base mx-auto text-center text-[#CCCCCC] max-w-[680px] mb-6'>If you've used ChatGPT, the OpenAl chatbot that has wowed users by writing code and instantly answering complex questions, you've gotten a glimpse into the next frontier in artificial intelligence, as big tech companies are racing to develop the leading Al chatbot.</p>
                                <p className=' font-openSans font-normal text-base mx-auto text-center text-[#CCCCCC]'>If you want to get portfolio exposure to Al companies but don't want to identify individual Al <span className='block'>stocks, you can invest in an Al-focused exchange-traded fund (ETF). AI ETFs provide exposure to a</span> broad range of the best Al companies, eliminating the need to research and choose individual <span className=' block'>stocks on your own.</span></p>
                                <span className=' flex justify-center -mt-[17%]'><Circle /></span>
                                <div className=' grid grid-cols-3'>
                                        <div className=' flex flex-col items-center justify-center translate-y-[-55%]'>
                                                <div className=' flex border border-solid border-[#83A339] rounded-full p-[10.51px] shadow-[0_7px_19.3px_0_#98BD4240]'>
                                                        <span className=' bg-[#83A339]  rounded-full w-[15.1px] h-[15.1px]'></span>
                                                </div>
                                                <span className=' mb-[14px]'><Linelr /></span>
                                                <h4 className=' font-orbitron font-bold text-[28px] leading-[40px] text-white pb-[10px]'>Sign up</h4>
                                                <p className=' font-openSans font-normal text-base text-[#CCCCCC] text-center max-w-[228px]'>Fill out the Registration Form to Get Started.</p>
                                                <button className=' text-white mt-[29px] font-poppins font-medium text-base border boder-solid border-white px-[22px] py-[14px]'>Open Your Account</button>
                                        </div>
                                        <div className=' flex flex-col items-center justify-center translate-y-[-23%]'>
                                                <div className=' flex border border-solid border-[#83A339] rounded-full p-[10.51px] shadow-[0_7px_19.3px_0_#98BD4240]'>
                                                        <span className=' bg-[#83A339] rounded-full w-[26px] h-[26px]'></span>
                                                </div>
                                                <span className=' mb-[14px]'><Linec /></span>
                                                <h4 className=' font-orbitron font-bold text-[28px] leading-[40px] text-white pb-[10px]'>Verification</h4>
                                                <p className=' font-openSans font-normal text-base text-[#CCCCCC] text-center max-w-[253px] pb-[29px]'>Schedule a Call with Our Verified AI Trading Mentors to Guide You Through Your Investment Journey</p>
                                        </div>
                                        <div className=' flex flex-col items-center justify-center translate-y-[-65%]'>
                                                <div className=' flex border border-solid border-[#83A339] rounded-full p-[10.51px] shadow-[0_7px_19.3px_0_#98BD4240]'>
                                                        <span className=' bg-[#83A339] rounded-full w-[15.1px] h-[15.1px]'></span>
                                                </div>
                                                <span className=' mb-[14px]'><Linelr /></span>
                                                <h4 className=' font-orbitron font-bold text-[28px] leading-[40px] text-white pb-[10px]'>Start Investing</h4>
                                                <p className=' font-openSans font-normal text-base text-[#CCCCCC] text-center max-w-[253px]'>Begin shaping your financial future with confidence and ease.</p>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Worksection
