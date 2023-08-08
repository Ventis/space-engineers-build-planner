import React, { useState } from 'react';
import Modal from 'react-modal';
import { Ore } from '../model/Ore';
import { InventoryItem } from '../model/interfaces/InventoryItem';
import { Material } from '../model/Material';

interface DebugModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

const DebugModal: React.FC<DebugModalProps> = ({ isOpen, onClose }) => {
    const [items, setItems] = useState<InventoryItem[]>([]);



    const createBlock = () => {
        throw new Error('Function not implemented.');
    }
    const createComponent = () => {
        throw new Error('Function not implemented.');
    }
    const createMaterial = () => {
        throw new Error('Function not implemented.');
    }
    const createOre = () => {
        const ore:Ore =new Ore("Iron Ore", 0.37, 0.05, [new Material('Iron Ingot', 0.7, 0.13)] )
        setItems((prevObjects) => [...prevObjects, ore]);
    }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="JSON Object Modal"
    >
      <div>
        <div>
          <button onClick={() => createBlock()}>Create Block</button>
          <button onClick={() => createComponent()}>Create Component</button>
          <button onClick={() => createMaterial()}>Create Material</button>
          <button onClick={() => createOre()}>Create Ore</button>
        </div>
        <div>
          <textarea
            value={JSON.stringify(items, null, 2)}
            readOnly
            style={{ width: '100%', height: '300px' }}
          />
        </div>
        <div>
          <button onClick={onClose}>Close Modal</button>
        </div>
      </div>
    </Modal>
  );
};

export default DebugModal;
