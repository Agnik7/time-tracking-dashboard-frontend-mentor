import React, {useState} from 'react'

export default function Card(props) {

  const [cardType,setCardType] = useState(props.type);
  const name = (props.type === 'self-care')?"Self Care":cardType.charAt(0).toUpperCase() + cardType.slice(1);
  const [cardName,setCardName] = useState(name)
  return (
    <div className={`font-rubik bg-${props.type} text-[white] rounded-[1rem]`}>
      <div className={`min-h-[2.875rem] w-9/10 mr-4 bg-no-repeat bg-top-right bg-icon-${props.type}`}>
          {/* <img src="/icon-work.svg" alt="" /> */}
      </div>
      <div className='bg-darkBlue hover:bg-desaturatedBlue relative rounded-[1rem] p-[1rem] sm:pb-[2rem] z-50'>
        <span className='sm:ml-[1rem]'>{cardName}</span>
        <img src="/icon-ellipsis.svg" alt="" className='absolute top-6 right-8 lg:block sm:hidden' />
        <div className='flex sm:flex-col  w-full justify-between items-center sm:mr-[5rem] sm:pl-[0.5rem]'>
          <h1 className='text-[2.5rem] md:text-[2rem] lg:text-[3.5rem] font-light w-full'>{props.current}hrs</h1>
          <span className='font-thin  sm:text-left text-right w-full'>Last {(props.duration === 'daily')?"Day":(props.duration === 'monthly')?"Month":"Week"}-{props.previous}hrs</span>
        </div>
      </div>
    </div>
  )
}