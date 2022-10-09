 
import { useState } from 'react';
import './App.css';
import data from './data';
import List from './List';


function App() {
const [people ,setPeople] = useState(data);
  
    return (
      <>
        <main>
          <div className=" ">
            <div className=" ">
              <span className="m-10 flex justify-center font-bold text-[#f5ebe0] text-2xl ">
                {people.length} Birthday today
                 
                  <button
                    className="bg-[#6d6875] py-2 px-10 rounded text-white "
                    onClick={() => setPeople([])}
                  >
                    Clear All
                  </button>
                
              </span>

              <List people={people} />
            </div>
          </div>
        </main>
      </>
    );
}

export default App;