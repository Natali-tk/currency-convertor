import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { ConvertorPage } from './pages/ConvertorPage';
import { ExchangeRatePage } from './pages/ExchangeRatePage';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <Route component={ConvertorPage} path="/" exact />
            <Route component={ExchangeRatePage} path="/about" />
            <Redirect to="/" />
          </Suspense>
        </Switch>
      </div>
    </>
  );
};

export default App;
