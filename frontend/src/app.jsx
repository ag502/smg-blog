import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NormalizeCss from './static/style/NormalizeCss';
import GlobalCss from './static/style/GlobalCss';
import { Header } from './components/common';
import Main from './pages/Main';
import MyPost from './pages/MyPost';

function App() {
    return (
        <>
            <GlobalCss />
            <NormalizeCss />
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/mylist' component={MyPost} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
