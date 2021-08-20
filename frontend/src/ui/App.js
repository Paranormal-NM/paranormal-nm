import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { Profile } from './Profile'
import {LogoBar} from './shared/components/LogoBar'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {Login} from "./Login"

export const App = () => (
    <>
        <BrowserRouter>
            <LogoBar/>
            <Switch>
                <Route exact path={'/login'} component={Login} />
                <Route exact path={'/profile'} component={Profile} />
                <Route exact path='/' component={Home} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)