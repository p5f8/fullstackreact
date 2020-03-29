import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/logon'
import Register from './pages/register'
import Profile from './pages/profile'
import NewIncident from './pages/newincident'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" exact component={Register} />

                <Route path="/profile" exact component={Profile} />
                <Route path="/insidents/new" exact component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}