import React from 'react';
import footer1 from './footer1.png'
import footer2 from './footer2.jpg'
const Footer = () =>{
  
    return(
        <div className="bg-gray-200 min-h-screen">
            <h1 className="text-3xl ml-20 mt-20 pt-20  ">MedisureHealthServices Business Solutions</h1>
       <div className="container  p-8 grid grid-cols-1  md:grid-cols-4 gap-110 items-center">
        
       <img src={footer1}
        alt="" 
         className= "   ml-20"/>
          <div className="ml-20"  >
            <h1 className=" font-bold text-lg ml-4">Scientific Recruitment</h1>
            <p className="text-sm ml-4" >
            Hire qualified researchers and build the best teams in science.
      </p>
      <button className="ml-4 px-5 mt-4 py-2 bg-[#fdfdfd] border border-[#2b4466] text-[#2b4466] mr-4 rounded-md">Find out more</button>
      </div>
          
       <img src={footer2}
        alt="" 
         className= " ml-20"/>
          <div className="ml-20" >
          <h1 className=" ml-4 font-bold text-lg ">Marketing Solutions</h1>
            <p className="ml-4 text-sm" >
            Grow your brand's impact in the scientific community with the world's leading network for scientists.
      </p>
      <button className="px-5 ml-4 mt-4 py-2 bg-[#fdfdfd] border border-[#2b4466] text-[#2b4466] mr-4 rounded-md">Find out more</button>
           </div></div>
           <hr className="my-8" />
        <div className="mb-8 ml-20 mr-20 border-b border-[#2b4466]"></div>
        <div className="container  p-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex space-x-4  ml-20 text-sm">
              <a href="#" className="text-gray-600  hover:text-gray-800">About us</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">News</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Careers</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Help Center</a>
            </div>
          <div className="text-left ml-20 text-sm ">
          <div className="flex space-x-4  ml-20" >
              <a href="#" className="text-gray-600  hover:text-gray-800">Researchers</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Q&A</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Publications</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Jobs</a>

            </div>
            <div className='text-gray-600'>© 2008- 2023  MedisureHealthServices GmbH. All rights reserved.</div>
    </div>
    

    </div>

    </div>
         
    )
}
export default Footer