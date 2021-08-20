import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {LogoBar} from "./shared/components/LogoBar";
import {StoryList} from "./shared/components/StoryList";


export const App = () => (
    <>
        <BrowserRouter>
            <LogoBar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/' component={StoryList} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)