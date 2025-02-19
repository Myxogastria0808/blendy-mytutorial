import { useEffect, useRef, useState } from 'react';
import './style.css';
import { Blendy, createBlendy } from 'blendy';
import { createPortal } from 'react-dom';

function App() {
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
}

function Modal({ onClose }: { onClose: React.MouseEventHandler<HTMLElement> }) {
  return (
    <div className="modal" data-blendy-to="example">
      <div>
        <h2>Blendy</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <p>
        Meet Blendy, a framework-agnostic tool that smoothly transitions one element into another with just a few lines
        of code.
      </p>
    </div>
  );
}

export default App;
