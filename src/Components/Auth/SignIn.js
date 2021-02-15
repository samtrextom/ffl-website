import React, {useState, useRef} from 'react'
import {useAuth} from '../../Context/AuthContext'
import {Button, TextField} from '@material-ui/core'
import {Alert} from '@material-ui/lab'
import {useHistory} from 'react-router-dom'

export default function SignIn() {

    const emailRef = useRef()
    const passwordRef = useRef()

    const {login} = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    async function handleSubmit(e){

        console.log(emailRef)
        console.log(passwordRef)

        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
            
        }catch{
            setError('Failed to login')
        }

        setLoading(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h5>Sign In</h5>
                {error && <Alert severity="error">{error}</Alert>}
                <div>
                    <TextField type="email" label="Email" inputRef={emailRef}/>
                </div>
                <div>
                    <TextField type="password" label="Password" inputRef={passwordRef}/>
                </div>
                <div>
                    <Button disabled={loading} type="submit" variant="contained" color="primary">Log In</Button>
            <div></div>
                </div>
            </form>
        </div>
    )
}
