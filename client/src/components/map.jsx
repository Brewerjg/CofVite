import React from 'react'
import coffeeDining from '../assets/coffeeDining.jpg';


const MapOne = () => {
  return (
    <div>
        <img className='image-bg' src={coffeeDining} alt="" />
        <div className='h-[100vh] flex flex-col justify-center items-center mt-10 py-4'>
            <div className='bg-white mt-10 rounded-lg shadow-md shadow-[#cde2e9] p-3 w-80'>
                <p className='text-2xl text-bold'>Come see us at our HQ <br/>
                Or find our coffee truck.</p>
            </div>
            <div className='relative w-1/2 h-96 m-4 flex justify-center py-4'>
                <iframe className='absolute  w-full h-full shadow-md shadow-[#00a6be] rounded-lg'  
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.142144868241!2d-94.1184135877154!3d36.33310467226874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c9175f2424d6eb%3A0xcaa6b735af42183d!2sOnyx%20Coffee%20Lab%20-%20Rogers%20HQ!5e0!3m2!1sen!2sus!4v1685483306371!5m2!1sen!2sus" 
                width="600" 
                height="450" 
                style={{border:"0 "}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className='bg-white rounded-lg mt-4 shadow-md shadow-[#00a6be] p-3 w-80'>
                <p className='text-2xl text-bold text-bold underline decoration-[#00a6be] '>The "Jacked Up" coffee truck events!</p>
            </div>
            <div className='bg-white rounded-lg shadow-md shadow-[#00a6be] mt-10  p-3 w-80 animate-bounce'>
                <p className='text-2xl text-bold text-bold '>Arkansas Children's Hospital<br/>
                Saturday the 29th<br/>9 AM to 3 PM</p>
            </div>
            
        </div>
    </div>
  )
}

export default MapOne

