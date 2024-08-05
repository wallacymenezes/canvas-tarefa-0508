import React, { useState } from 'react';

function RendCond() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='container'>
      {loggedIn ? (
        <h1>Bem-vindo de volta!</h1>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Entrar</button>
      )}
    </div>
  );
}
export default RendCond;