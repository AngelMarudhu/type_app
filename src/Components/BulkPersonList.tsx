import React from 'react';

type persons = {
  bulkName: {
    fName: string;
    lName: string;
  }[];
};

const BulkPersonList = (props: persons) => {
  return (
    <div>
      {props.bulkName.map((name) => {
        return (
          <h2>
            {' '}
            {name.fName} {name.lName}
          </h2>
        );
      })}
    </div>
  );
};

export default BulkPersonList;
