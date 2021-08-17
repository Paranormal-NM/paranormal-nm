import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { Profile } from './Profile'
import { Sort } from './Sort'
import { FourOhFour } from './FourOhFour'
import React from 'react'

export const App = () => (
    <>
        <BrowserRouter>
           <Sort/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/profile' component={Profile} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)