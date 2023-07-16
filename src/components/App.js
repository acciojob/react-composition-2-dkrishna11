
import React, {useState} from "react";
import './../styles/App.css';
import Modal from './Modal';

const App = () => {
  let [prop, setProb]=useState(false)

  function handleCloseModal() {
    setProb(false);
  }

  return (
    <div id="main">
       <button onClick={()=>setProb(true)}>Open Modal</button>
       <Modal show={prop} onClose={handleCloseModal}>
          <div className="modal">
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
          </div>
       </Modal>
       </div>
  )
}

export default App
