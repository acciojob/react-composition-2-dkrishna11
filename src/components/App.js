
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [prop, setProb]=useState(true)
  return (
    <div>
        <button className="model-overlay" onClick={()=>setProb(true)}>Show Model</button>
        <div className="model-close" onClick={()=>setProb(false)}>
          {prop && <div>
              <button>Close</button>
              <p>This is the Content of the modal</p>
            </div>}
        </div>
    </div>
  )
}

export default App
