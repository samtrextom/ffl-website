import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../Store/Actions/authActions'

const SingedInLinks =(props)=>{

    return(
        <ul className="right">
            <li><NavLink to={'/team/'+props.profile.teamId}>My Team</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-1'>{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDisptachToProps = (dispatch)=>{
    return{
        signOut: ()=>dispatch(signOut())
    }
}

export default connect(null,mapDisptachToProps)(SingedInLinks)