import React from 'react'
import { Route, Switch , Redirect  } from 'react-router-dom';
import Login from '../Auth/login';
import Profile from '../Auth/profile';

function Auth() {
    return (
        <div className='w-full p-2 bg-gray-100'>

            <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/profile" exact component={Profile} />
                    <Redirect from="/auth" to="/auth/login" />
            </Switch>
        </div>
    )
}

export default Auth
