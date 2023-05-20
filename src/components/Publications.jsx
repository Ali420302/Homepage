import React from 'react';
const Publications = () =>{
  

    return(
        
       <div className="container mt-8 p-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-left ml-20  ">
            <h1 className="text-4xl  font-bold mt-20 al">Connect with your scientific community</h1>
            <p className="text-lg mt-4 mb-4">
            Share your research, collaborate with your peers, and get the support you need to advance your career.
      </p>
      </div>
          <div className="text-left ml-20 ">
            <h1 className="text-2xl text-[#6d7e96]  ">VISIT TOPIC PAGES</h1>
            
            <button className="px-5 mt-4 py-2 bg-[#fdfdfd] border border-[#2b4466] text-[#2b4466] mr-4 rounded-md">Engineering</button>
            <button className="px-5 mt-4 py-2 bg-[#fdfdfd] border border-[#2b4466] text-[#2b4466] mr-4 rounded-md">Biology</button>
            <button className="px-5 mt-4 py-2 bg-[#fdfdfd] border border-[#2b4466] text-[#2b4466] mr-4 rounded-md">Medicine</button>
          </div>

      
       
         
    
    </div>
         
    )
}
export default Publications