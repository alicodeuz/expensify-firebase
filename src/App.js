import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

const App = () => {
  return (
    <div>

      <div className="container mt-5">
        <h2>Expensify app</h2>
        <Switch>
          {
            routes.authenticated.map(item => {
              return (
                <Route {...item} />
              )
            })
          }
        </Switch>
      </div>
    </div>
  );
}

export default App;
