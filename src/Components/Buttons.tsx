import React from 'react';

type buttonProp = {
  handleClicks: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

const Buttons = (props: buttonProp) => {
  return (
    <div>
      <button onClick={(event) => props.handleClicks(event, 1)}>Click</button>
    </div>
  );
};

export default Buttons;
