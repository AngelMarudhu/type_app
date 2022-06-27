import React from 'react';

type selfName = {
  name: {
    fName: React.ReactNode;
    sName: React.ReactNode;
    lName: React.ReactNode;
  };
};

const Person = (props: selfName) => {
  return (
    <div>
      <h1>
        Person Created By {props.name.fName} {props.name.lName}
      </h1>
    </div>
  );
};

export default Person;
