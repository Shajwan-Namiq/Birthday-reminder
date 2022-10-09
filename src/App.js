 
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
              <span className="mt-10 flex justify-center font-bold text-[#f5ebe0] text-2xl ">
                {people.length} Birthday today
              </span>

              <span className="mt-5  flex justify-center font-bold text-[#f5ebe0] text-2xl ">
                <button
                  className="bg-[#d5bdaf] hover:bg-[#935b3a] py-2 px-12 rounded-lg text-slate-900 "
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