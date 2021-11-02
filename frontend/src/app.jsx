import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NormalizeCss from './static/style/NormalizeCss';
import { Header } from './components/common';
import Main from './pages/Main';

function App() {
    return (
        <>
            <NormalizeCss />
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Main} />
                </Switch>
            </Router>
        </>
    );
}

export default App;