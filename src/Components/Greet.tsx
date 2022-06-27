import React from 'react';

type greetProps = {
  name: string;
  counter?: number;
  isLogged: boolean;
};

const Greet = (props: greetProps) => {
  const { counter = 0 } = props;

  return (
    <div>{props.isLogged ? <h1></h1> : <h1>Just Follow {counter} </h1>}</div>
  );
};

export default Greet;
