import React from 'react'

const Staticticessection = () => {
        const crd=[{
                number: "01",
                para: "Places left to register",       
        },
        {
                number: "135",
                para: "Average Registrations per day", 
                
        },
        {
                number: "5X",
                para: "The Average Earnings Increase",        
        },
        
        ]
        const cardsdata =crd.map((crd ,i)  =>(
                <div key={i} className=' flex items-center flex-col justify-center bg-white min-h-[200px] md:min-h-[318px] h-full w-full'>
                         <div className=' flex justify-center items-center border border-solid border-[#0000004D] bg-[#E0EBC6]  max-w-[68px] md:max-w-[199px] min-h-[65px] md:min-h-[173px] w-full'>
                                <h4 className=' font-orbitron text-black font-bold text-[30px] md:text-[40px] lg:text-[68px]'>{crd.number}</h4>
                         </div>
                         <p className='pt-[19px] font-openSans font-semibold text-lg md:text-2xl text-black max-w-[262px] text-center'>{crd.para}</p>
                </div>
                
        ))
  return (
    <div className=' mx-9 bg-[#98BD42] py-[30px] md:py-[85px]' >
      <div className=' container mx-auto px-3'>
      <h1 className=' text-black font-orbitron font-normal text-3xl md:text-4xl lg:text-5xl lg:leading-[67.2px] text-center mx-auto pb-6 md:pb-[43px]'>Statistics <span className=' text-black font-bold'>For Today</span></h1>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30.6px]'>
   {cardsdata}
      </div>
      </div>
    </div>
  )
}

export default Staticticessection
