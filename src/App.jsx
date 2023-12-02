import React, { useState,useEffect } from 'react';
import ProfileCard from './components/profileCard';
import Card from './components/card';
import jsonData from '../data.json';
function App() {
  const [clicked,setClicked] = useState('weekly');
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch or process data from jsonData
    setData(jsonData);
  }, []);
  return (
    <div className='w-screen min-h-screen bg-veryDarkBlue py-[2rem] flex items-center justify-center'>
      <div className="container flex flex-col xmd:flex-row justify-between gap-[2rem] w-full xmd:w-4/5 mx-[2rem]">
        <ProfileCard clicked={clicked} setClicked={setClicked} />
        <div className='flex flex-col w-full'>
          <div className='flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-[2rem] mb-[1rem]'>
          {data.map((item) => (
              <Card key={item.title} color="red" type={item.title.toLowerCase()} current={item.timeframes[clicked].current} previous={item.timeframes[clicked].previous} duration={clicked} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
