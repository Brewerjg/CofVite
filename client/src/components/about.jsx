import React from 'react'
import coffeeDining from '../assets/coffeeDining.jpg';




const About = () => {
  return (
    <div>
      <img className='image-bg' src={coffeeDining} alt="" />
    {/* full screen story */}
        <div className='h-[100vh] flex flex-col justify-center items-center my-10 py-4'>
            <div className='hidden lg:block bg-transparent  p-3 w-auto'>
                <p className='text-[#00a6be] font-["Permanent_Marker"] text-9xl'>OUR STORY</p>
            </div>
            <div className='hidden md:block bg-amber-50 rounded-lg p-8  mx-36 text-2xl'>Tupelo Coffee Company began at the Hillcrest Farmers Market with a selection of home-baked, hand-crafted pastries and pour-over coffees. While the demand for our pastries and coffees grew, we built important relationships with the growers and producers there. When Tupelo became a brick-and-mortar store, these relationships created the basis for a philosophy that permeates everything we do. At Tupelo, our commitment to the greater good is the cornerstone of every decision we make. Food sourcing is a major component of our business model, but we also understand that sustainability goes much further than simply purchasing the best ingredients. It means making the often difficult choice of equity and justice over economic gain or efficiency.</div>

{/* story for small screens */}

            <div className='md:hidden bg-amber-50 rounded-lg p-8 mt-10  mx-36 text-base w-full'>Tupelo Coffee Company began at the Hillcrest Farmers Market with a selection of home-baked, hand-crafted pastries and pour-over coffees. While the demand for our pastries and coffees grew, we built important relationships with the growers and producers there. When Tupelo became a brick-and-mortar store, these relationships created the basis for a philosophy that permeates everything we do. At Tupelo, our commitment to the greater good is the cornerstone of every decision we make. Food sourcing is a major component of our business model, but we also understand that sustainability goes much further than simply purchasing the best ingredients. It means making the often difficult choice of equity and justice over economic gain or efficiency.</div>
            
        </div>

        
    </div>
  )
}

export default About