import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { auth } from './configs/firebase';
import routes from './routes';
import { signOut } from './utils';

const App = () => {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const checkAuthState = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        console.log('USERR', user);
        setToken(uid);
        setCurrentUser({ ...user });
      } else {
        console.log('NO USER');
        setToken(null);
      }
    });
  }

  useEffect(() => {
    checkAuthState();
  }, []);

  if (token) {
    return (
      <div>
        <button onClick={() => signOut()}>Sign Out</button>
        <div className="container mt-5">
          <h2>Expensify app</h2>
          <Redirect to="/profile" />
          <Switch>
            {
              routes.authenticated.map(item => {
                return (
                  <Route {...item} component={null} render={route => <item.component {...route} currentUser={currentUser} />} />
                )
              })
            }
          </Switch>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="container mt-5">
        <Switch>
          {
            routes.public.map(item => {
              return (
                <Route {...item} />
              )
            })
          }
          <Redirect to="/sign-in" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
