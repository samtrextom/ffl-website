import React from 'react'
import {useAuth} from '../../Context/AuthContext'

export default function Account() {
    
    const {currentUser} = useAuth()
    
    return (
        <div>
            <h3>{currentUser.email}</h3>
        </div>
    )
}
