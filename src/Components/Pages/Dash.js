import React from 'react'
import {useAuth} from '../../Context/AuthContext'

export default function Dash() {

    const {currentUser} = useAuth()

    return (
        <div>
            <h2>Dashboard</h2>
            <div>Welcome {currentUser.email}</div>
        </div>
    )
}
