import React, { useEffect, useState } from 'react';
import main from './main.jpg'
const Hero = () =>{
  const [shouldApplyMargin, setShouldApplyMargin] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 750) {
        setShouldApplyMargin(true);
      } else {
        setShouldApplyMargin(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return(
        <div className="bg-gray-200 min-h-screen">
       <div className="container mt-8 p-8 grid grid-cols-1 md:grid-cols-2 gap-110 items-center">
       <img src={main}
        alt="" 
         className= {`mt-20 ${shouldApplyMargin ? 'md:order-last' : ''}`}/>
          <div className={`text-left ml-20 ${shouldApplyMargin ? ' mt-10 md:order-first' : ''}`}>
            <h1 className="text-4xl  font-bold mt-20 al">Discover Medical knowledge and stay connected to the world of Medicine</h1>
          
            <button className="px-20 mt-4 py-2 bg-green-800 text-white rounded-md">Join for free</button>
          </div>

      
       
         
    </div>
    </div>
         
    )
}
export default Hero