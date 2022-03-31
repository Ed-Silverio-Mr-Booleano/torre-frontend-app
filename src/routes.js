import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Skills from './pages/Skills';

export default function Routes(){
    return(
        <Switch>
            <Route path= "/" exact component={Home} />
            <Route path= "/skill" component={Skills} />
        </Switch>
    );
}

