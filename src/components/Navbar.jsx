import React , { useEffect, useState } from 'react';
import logo from './Capture.PNG';

const Navbar = () =>{
  const [shouldApplyMargin, setShouldApplyMargin] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
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
        <div className="flex items-center justify-between p-4 shadow-md w-full bg-white fixed top-0 left-0">
             <div className={`flex items-center ${shouldApplyMargin ? 'ml-20' : ''}`}>
                <img
        src={logo}
        alt="error"
        className="h-8 w-auto"
      />
       <span className={`ml-5 ${shouldApplyMargin ? 'text-3xl' : ''} font-bold `}><span className="text-red-500">M</span>edisure<span className="text-red-500">H</span>ealth<span className="text-red-500">S</span>ervices</span>
       
       </div>
       <div className={`flex items-center ${shouldApplyMargin ? 'mr-20' : ''}`}>
        <ul className='flex'>
          <li className='p-4 font-bold'>Log in</li>
          <li className='p-4 text-[#00df9a] font-bold'>Join for free</li>
        </ul>
       </div>
      
         </div>
         
    )
}
export default Navbar