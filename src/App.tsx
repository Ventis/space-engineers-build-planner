import React, { MouseEvent, useState } from 'react';
import './App.css';
import DebugModal from './view/DebugModal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <DebugModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
