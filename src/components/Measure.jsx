import React from 'react';
import measure from './measure.jpg'
const Measure = () =>{
  
    return(
        
       <div className="container mt-8 p-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
       <img src={measure}
        alt="" 
         className= "rounded-full h-[400px] w-[400px] ml-20"/>
          <div className="text-left ml-20 ">
            <h1 className="text-4xl  font-bold  ">Measure your impact</h1>
            <p className="text-lg mt-4 mb-4">
            Get in-depth stats on who's been reading your work and keep track of your citations.
      </p>
          </div>

      
       
         
    
    </div>
         
    )
}
export default Measure