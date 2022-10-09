import React from "react";

const List = ({ people }) => {
  return (
    <>  
      {people.map((person) => {
        const { id, name, age, image } = person;
        
 return (
   <div key={id}>
     <ul
       class="my-5 mx-5 lg:mx-60 p-5   flex justify-center items-center bg-[#d4a373bc] 
        transform hover:scale-90 
            hover:bg-[#d5bdaf] transition 
            ease-out duration-500"
     >
       <li class="pb-3 sm:pb-4">
         <div class="flex items-center  space-x-10">
           <div class="flex-shrink-0">
             <img class="w-20 h-20 rounded-full" src={image} alt={name} />
           </div>
           <div class="flex-1 min-w-0">
             <p class="text-lg font-medium text-gray-900 truncate dark:text-white">
               {name}
             </p>
             <p class="text-sm text-gray-900 truncate ">{age} years</p>
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
