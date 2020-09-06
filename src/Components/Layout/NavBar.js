import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'

const NavBar=(props)=>{

    const {auth, profile}=props
    const links = auth.uid ?<SignedInLinks profile={profile} auth={auth}/> : <SignedOutLinks/>
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo left">Third Time's The Charm</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps=(state)=>{

    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar)