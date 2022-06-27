import React, { useState } from 'react';

const HooksState = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      User Is
      {isLoggedIn ? <h1>Marudhupandiyan</h1> : <h1>Nayanthara</h1>}
      <button
        type='button'
        onClick={handleLogin}
        style={{ width: '100px', padding: '1rem', marginTop: '1rem' }}
      >
        Login
      </button>
      <button
        type='button'
        onClick={handleLogout}
        style={{ width: '100px', padding: '1rem' }}
      >
        Logout
      </button>
    </div>
  );
};

export default HooksState;
