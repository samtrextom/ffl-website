import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import {NavLink} from 'react-router-dom'
import {signOut} from '../../Store/Actions/authActions'
import {connect} from 'react-redux'


const SignedInMenu = ({ open, setOpen, profile},props) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <NavLink to={'/team/'+profile.teamId}>My Team</NavLink>
      <NavLink to={'/franchisetag'}>Franchise Tags</NavLink>
      <NavLink to={'/history'}>League History</NavLink>
      <a onClick={props.signOut}>Log Out</a>
    </StyledMenu>
  )
}

SignedInMenu.propTypes = {
  open: bool.isRequired,
}

const mapDisptachToProps = (dispatch)=>{
  return{
      signOut: ()=>dispatch(signOut())
  }
}

export default connect(null,mapDisptachToProps)(SignedInMenu)