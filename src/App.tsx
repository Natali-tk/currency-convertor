import React from 'react';
import { Navbar } from './components/NavBar';
import { RouterReact } from './routers/routers';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <RouterReact />
    </>
  );
};

export default App;
