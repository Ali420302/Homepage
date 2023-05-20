import React from 'react';
import search from './search.jpg'
const Search = () =>{
  

    return(
        
       <div className="container mt-8 p-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
       <img src={search}
        alt="" 
         className= "rounded-full h-[400px] w-[400px] ml-20"/>
          <div className="text-left ml-20  ">
            <h1 className="text-4xl  font-bold mt-20 ">Discover research</h1>
            <p className="text-lg mt-4 mb-4">
            Access over 135 million publication pages and stay up to date with what's happening in Medical field..
      </p>
      <div className="ml-4">
          <input type="text" placeholder="Search" className="border border-gray-300 rounded-md px-4 py-2" />
        </div>
          </div>

      
       
         
    
    </div>
         
    )
}
export default Search