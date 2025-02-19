import { useEffect, useRef, useState } from 'react';
import './style.css';
import { Blendy, createBlendy } from 'blendy';
import { createPortal } from 'react-dom';
import Modal from './components/Modal';

const App = () => {
  const blendy = useRef<Blendy | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    blendy.current = createBlendy({ animation: 'dynamic' });
  }, []);

  return (
    <div>
      {showModal &&
        createPortal(
          <Modal
            onClose={() => {
              blendy.current?.untoggle('example', () => {
                setShowModal(false);
              });
            }}
          ></Modal>,
          document.body
        )}
      <button
        className="button"
        data-blendy-from="example"
        onClick={() => {
          setShowModal(true);
          blendy.current?.toggle('example');
        }}
      >
        <span>Open</span>
      </button>
    </div>
  );
};

export default App;
