import React, { useState } from 'react';

type user = {
  email: string;
  name: string;
};

const HookStateTypescript = () => {
  const [user, setUser] = useState<user | null>(null);

  const handleLogin = () => {
    setUser({
      name: 'Marudhu',
      email: 'marudhu@gmail.com',
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <div>
        <h1>{user?.name}</h1>
        <h1>{user?.email}</h1>
      </div>

      <button
        type='button'
        onClick={handleLogin}
        style={{
          width: '100px',
          padding: '1rem',
          marginTop: '1rem',
          transition: ' 0.5s ease-in-out',
        }}
      >
        User
      </button>
      <button
        type='button'
        onClick={handleLogout}
        style={{ width: '100px', padding: '1rem', marginTop: '1rem' }}
      >
        UserOff
      </button>
    </div>
  );
};

export default HookStateTypescript;
