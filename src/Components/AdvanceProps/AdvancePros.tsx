import React from 'react';

type statusProps = {
  status: string;
};

const AdvancePros = (props: statusProps) => {
  let message;
  if (props.status === 'loading') {
    message = 'Data Loading!';
  } else if (props.status === 'success') {
    message = 'Data Fetched Successfully!';
  } else {
    message = 'Data Fetching Failure!';
  }

  return (
    <div>
      <h1>Current Status is {message} </h1>
    </div>
  );
};

export default AdvancePros;
