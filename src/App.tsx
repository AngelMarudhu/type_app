import React from 'react';
import './App.css';
import Greet from './Components/Greet';
import Person from './Components/Person';
import BulkPersonList from './Components/BulkPersonList';
import AdvancePros from './Components/AdvanceProps/AdvancePros';
import Buttons from './Components/Buttons';
import StyleProps from './Components/StyleProps';
import HooksState from './Components/HooksState';
import HookStateTypescript from './Components/HookStateTypescript';
import HookUsereducer from './Components/HookUsereducer';

function App() {
  const personName = {
    fName: 24,
    sName: 'Marudhu',
    lName: 'Pandiyan',
  };

  const bulkPersonList = [
    {
      fName: 'Marudhu',
      lName: 'Pandiyan',
    },
    {
      fName: 'Nayan',
      lName: 'Thara',
    },
    {
      fName: 'Rakul',
      lName: 'Preet',
    },
  ];

  return (
    <div className='App'>
      <Greet name='Marudhupandiyan' isLogged={false} counter={24} />
      <Person name={personName} />
      <BulkPersonList bulkName={bulkPersonList} />
      <AdvancePros status='success' />
      <Buttons
        handleClicks={(event, id) => {
          console.log('marudhu', event, id);
        }}
      />
      <StyleProps
        styles={{
          border: '1px solid green',
          padding: '1rem',
          width: 'fit-content',
        }}
      />
      <HooksState />
      <HookStateTypescript />
      <HookUsereducer />
    </div>
  );
}

export default App;
