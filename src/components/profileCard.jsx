import React,{useState,useEffect} from 'react';

export default function ProfileCard({clicked,setClicked}) {
    

  return (
    <div className='font-rubik bg-darkBlue  text-[white] rounded-[1rem] sm:mb-[1rem]'>
        <div className='bg-primaryBlue flex sm:flex-col items-center sm:items-start gap-[2rem] px-[1rem] outline-none py-[2rem]  rounded-[1rem]'>
            <div className='w-[5rem] h-[5rem] border-[0.2rem] border-[white] rounded-full'>
                <img src="/image-jeremy.png" alt="" className='w-full h-full'/>
            </div>
            <div>
                <p className='font-light text-[14px]'>Report for</p>
                <p className='text-[1.3rem] sm:text-[2rem] font-light sm:mb-[1rem] sm:mr-[4rem]'>Jeremy Robson</p>
            </div>
        </div>
        <div className='flex justify-between xmd:h-2/5 flex-row xmd:flex-col text-desaturatedBlue xmd:justify-center xmd:mb-[1rem] xmd:gap-[1rem] py-[1rem] px-[2rem]'>
            <p onClick={()=>{setClicked("daily")}} className='hover:text-paleBlue hover:cursor-pointer'>Daily</p>
            <p onClick={()=>{setClicked("weekly")}} className='hover:text-paleBlue hover:cursor-pointer'>Weekly</p>
            <p onClick={()=>{setClicked("monthly")}} className='hover:text-paleBlue hover:cursor-pointer'>Monthly</p>
        </div>
    </div>
  )
}
