import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'
import Burger from './Burger'
import SignedInMenu from './SignedInMenu'
import SignedOutMenu from './SignedOutMenu'
import {ThemeProvider} from 'styled-components'
import { theme } from './theme'


const NavBar=(props)=>{

    const [open, setOpen] = useState(false)
    const {auth, profile}=props
    const links = auth.uid ?<SignedInLinks profile={profile} auth={auth}/> : <SignedOutLinks/>
    const menus = auth.uid ?<SignedInMenu profile={profile} auth={auth} open={open} setOpen={setOpen}/> : <SignedOutMenu open={open} setOpen={setOpen}/>
    return (
        <ThemeProvider theme={theme}>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Burger open={open} setOpen={setOpen}/>
                    <Link to='/' className="nav-logo">Third Time's The Charm</Link>
                    {links}
                </div>
            </nav>
            {menus}
        </ThemeProvider>
        
    )
}

const mapStateToProps=(state)=>{

    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar)