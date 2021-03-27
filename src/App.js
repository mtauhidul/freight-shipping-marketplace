import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';

const App = () => (
    <Router>
        <NavBar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
        <Footer />
    </Router>
);

export default App;
