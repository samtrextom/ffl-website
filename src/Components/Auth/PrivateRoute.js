import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useAuth} from '../../Context/AuthContext'
import Layout from '../Layout/Layout'

export default function PrivateRoute({component: Component, ...rest}) {
    
    const {currentUser} = useAuth()
    
    return (
        <Route
            {...rest}
            render={(props) => {
               return currentUser ? <Layout><Component {...props}/></Layout>  : <Redirect to='/signin'/>
            }}>
        </Route>
    )
}
