import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConvertorPage } from '../pages/ConvertorPage';
import { ExchangeRatePage } from '../pages/ExchangeRatePage';
import { Container } from '../styles/styles';

export const RouterReact: React.FC = () => {
  return (
    <div className="container">
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <Route component={ConvertorPage} path="/" exact />
          <Route component={ExchangeRatePage} path="/about" />
          <Redirect to="/" />
        </Suspense>
      </Switch>
    </div>
  );
};
