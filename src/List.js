import React from "react";

const List = ({ people }) => {
  return (
    <>  
      {people.map((person) => {
        const { id, name, age, image } = person;
        
 return (
   <div key={id}>
     <ul
       className="rounded-lg my-10 mx-5 lg:mx-60 p-5   flex justify-center items-center bg-[#b07d62] 
        transform hover:scale-105 
            hover:bg-[#d5bdaf] transition 
            ease-out duration-500"
     >
       <li className="pb-3 sm:pb-4">
         <div className="flex items-center  space-x-10">
           <div className="flex-shrink-0">
             <img className="w-20 h-20 rounded-full" src={image} alt={name} />
           </div>
           <div className="flex-1 min-w-0">
             <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
               {name}
             </p>
             <p className="text-sm text-gray-900 truncate ">{age} years</p>
           </div>
         </div>
       </li>
     </ul>
   </div>
 );
      })}
    </>
  );
};

export default List;
