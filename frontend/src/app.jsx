import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NormalizeCss from './static/style/NormalizeCss';
import GlobalCss from './static/style/GlobalCss';
import { Header } from './components/common';
import Main from './pages/Main';
import MyPost from './pages/MyPost';
import PostView from './pages/PostView';
import Write from './pages/Write';

import { AuthContext } from './hooks/context';

function App() {
    return (
        <AuthContext.Provider value='ag502'>
            <GlobalCss />
            <NormalizeCss />
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/mylist' component={MyPost} />
                    <Route exact path='/post/:id' component={PostView} />
                    <Route exact path='/write' component={Write} />
                    <Route exact path='/write/:id' component={Write} />
                </Switch>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
