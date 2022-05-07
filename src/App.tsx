import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { ConvertorPage } from './pages/ConvertorPage';
import { ExchangeRatePage } from './pages/ExchangeRatePage';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={ConvertorPage} path="/" exact />
          <Route component={ExchangeRatePage} path="/about" />
        </Switch>
      </div>
    </>
  );
};

export default App;
