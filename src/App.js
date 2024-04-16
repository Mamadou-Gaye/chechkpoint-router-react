import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FilmList from './FilmList';
import FilmDetail from './FilmDetail'; // Créez ce composant pour afficher les détails du film

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <FilmList />
          </Route>
          <Route path="/film/:id">
            <FilmDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;