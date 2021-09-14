import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { Profile } from './Profile'
import { Story } from './Story'
import { LogoBar } from './shared/components/LogoBar'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import { Login } from "./Login/Login"
import { Provider } from "react-redux";
import {StoryCategory} from "./StoryCategory";

export const App = (store) => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <LogoBar/>
                <Switch>
                    <Route exact path={'/login'} component={Login} />
                    <Route exact path={'/profile'} component={Profile} />
                        <Route exact path ={'/story-category/:name'} name={":name"} component={StoryCategory}/>
                    <Route exact path={'/story/:storyId'} storyId={":storyId"} component={Story}/>
                    <Route exact path='/' component={Home} />
                    <Route component={FourOhFour} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </>
)