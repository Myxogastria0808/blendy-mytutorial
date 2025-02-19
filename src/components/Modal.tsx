import { FC } from 'react';

type Props = {
  onClose: React.MouseEventHandler<HTMLElement>;
};

const Modal: FC<Props> = (props) => {
  return (
    <div className="modal" data-blendy-to="example">
      <div>
        <h2>Blendy</h2>
        <button onClick={props.onClose}>Close</button>
      </div>
      <p>
        Meet Blendy, a framework-agnostic tool that smoothly transitions one element into another with just a few lines
        of code.
      </p>
    </div>
  );
};

export default Modal;
