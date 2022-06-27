import React, { useReducer } from 'react';

type stateCounter = {
  count: number;
};

type actionCounter = {
  type: string;
  payload: number;
};

const initialState = { count: 0 };

function reducer(state: stateCounter, action: actionCounter) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return { count: state.count - action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const HookUsereducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state.count}</p>
      <button
        style={{ width: '150px', padding: '1rem', marginTop: '1rem' }}
        onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}
      >
        Increment 10
      </button>
      <button
        style={{ width: '150px', padding: '1rem', marginTop: '1rem' }}
        onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}
      >
        Decrement 10
      </button>
      <button
        style={{ width: '150px', padding: '1rem', marginTop: '1rem' }}
        onClick={() => dispatch({ type: 'RESET', payload: 10 })}
      >
        Reset
      </button>
    </div>
  );
};

export default HookUsereducer;
