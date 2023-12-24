import React, { useLayoutEffect, useRef } from 'react'
import {gsap} from 'gsap'
import SplitType from 'split-type'
import CoffeeMan from '../assets/manCoffee.jpg'
import coffeeMenu from '../assets/coffee_menu.jpg'
import coffeeGo from '../assets/coffeeGo.jpg'
import NeonCoffee from '../assets/neonCoffee.jpg'
import womenCoffee from '../assets/womanCoffee.jpg'
import veteran from '../assets/veterans.jpg'




const Heading_one=()=> {

    const typeRef = useRef();

    useLayoutEffect(() => {
    var myText = new SplitType ('.my-text');
    gsap.to(myText.chars, {duration: 1, y: 0, stagger: 0.04, delay: .5,
        duration: .1, ease: 'power2.inOut'});
    }, [])

  return (
    <div  className=' w-full h-full'>

        {/* Container */}
        <div name='home'  className=' mx-auto  flex flex-col items-center w-full h-full '>
            <div className='home text-white '>
                <p className='my-text text-5xl sm:text-8xl font-["Bungee_Shade"] py-4'> Tupelo Coffee</p>
                <p className='my-text hidden lg:block text-2xl p-4'>We are providers of the best coffee products in the south.</p>
            </div>

            {/* grid */}
            <div className='my-8 grid 2xl:grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 justify-center gap-8 p-6'>
{/* small farmer card */}
                <div className="bg-white hover:scale-110 duration-150 max-w-md rounded overflow-hidden shadow-2xl">
                    <img className="w-full" src={CoffeeMan} alt="coffee"/>
                    <div className="px-6 py-4">
                        <div className=" font-bold text-xl mb-2">Small Farmer Grown</div>
                        <p className="text-gray-700 text-base">
                        We've been a proud supporter of authentic fair trade since day one, and to us that means knowing and working directly with the farmers who produce our food. We partner with farmer cooperatives who are democratically organized, sharing resources and decision-making among their members. Collectively, they gain crucial market access and decide how to invest fair trade and organic premiums in their communities. We now source from over 40 small farmer organizations around the world. Our longstanding relationships allow us to secure the best crops, while continuing to develop innovative programs in collaboration with the co-ops, from crop diversification to quality trainings to women's leadership development.
                        </p>
                    </div>
                </div>
{/* menu card */}
                <div className="bg-white hover:scale-110 duration-150 max-w-md rounded overflow-hidden shadow-2xl">
                    
                    <a href="/menu">
                        <img className="w-full" src={coffeeMenu} alt="coffee"/>
                    </a>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Goods</div>
                        <p className="text-gray-700 text-base">
                        Americano, Cappuccino, Espresso, Latte, Macchiato, Mocha, and more! We have a wide variety of coffee drinks to choose from. We also have a wide variety of teas and other drinks to choose from. Check out our menu to see what we have to offer.
                        </p>
                    </div>
                </div>
{/* womens card */}
                <div className="bg-white hover:scale-110 duration-150 max-w-md rounded overflow-hidden shadow-2xl">
                    <a href="https://www.womenincoffee.org/">
                        <img className="w-full" src={womenCoffee} alt="coffee"/>
                    </a>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Women in Coffee</div>
                        <p className="text-gray-700 text-base">
                        Women face multiple challenges in the coffee value chain, including underrepresentation in leadership roles, leading to limited opportunities for growth. Find out how to support Women in coffee. 
                        </p>
                    </div>
                </div>
{/* on the go */}
                <div className="bg-white hover:scale-110 duration-150 max-w-md rounded overflow-hidden shadow-2xl">
                    <a href="/onTheGo">
                        <img className="w-full" src={coffeeGo} alt="coffee"/>
                    </a>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Find Coffee on the go!</div>
                        <p className="text-gray-700 text-base">
                            At times it can be hard to make it in to one of our many locations. We have a solution for that! We have a coffee truck that travels around the state of Arkansas. Check out our schedule to see where we will be next!
                        </p>
                    </div>
                </div>
{/* Veterans card */}
                <div className="bg-white hover:scale-110 duration-150 max-w-md rounded overflow-hidden shadow-2xl">
                        <img className="w-full" src={veteran} alt="coffee"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Veterans Social</div>
                        <p className="text-gray-700 text-base">
                            Keeping with our tradition of giving back to the community.  We have a special event for veterans.  Come join us for a cup of coffee and a chat.  We will be hosting this event on the 3rd Saturday of every month.  We hope to see you there!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='relative subscribe '>
            <div className='relative w-full h-full  '>
                <img src={NeonCoffee} alt="" />

                <div name='contact' className='hidden lg:block absolute top-1/2 left-1/2 text-center -translate-x-64 -translate-y-48   bg-transparent  '>
                <form className='bg-amber-50 p-4 rounded-lg flex flex-col max-w-[600px] w-full' method='post' action="https://getform.io/f/d73ca015-f039-4e23-af71-539db807fc37">
                    <div className=' pb-8'>
                        <p className='text-4xl font-bold font-["Permanent_Marker"] inline border-b-4 border-pink-600 text-pink-600'>
                            Subscribe
                        </p>
                        <p className='text-pink-600 py-4'>Join our pilgrimage— seeking quality, truth and accountability<br/>
                        in coffee. Sign-up on our email list below to join<br/> 
                        the Tupelo Coffee Society. This will give you “early access” to <br/>
                        special offerings, discount codes, brew videos and secrets…shhhh!…</p>
                    </div>
                    <input className='bg-[#ccd6f6] rounded-md p-2' type="text" placeholder='Name' name='name' />
                    <input className='rounded-md my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                    <button className='rounded-lg text-[#00a6be] border-2 border-pink-600 hover:bg-pink-600 hover:border-pink-600 mt-4 px-4 py-3 mx-auto flex items-center font-["Permanent_Marker"]'>Subscribe Now!</button>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Heading_one
