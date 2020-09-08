import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import {NavLink} from 'react-router-dom'

const SignedOutMenu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <NavLink to='./'>Sign Up</NavLink>
      <NavLink to='./'>Sign In</NavLink>
    </StyledMenu>
  )
}

SignedOutMenu.propTypes = {
  open: bool.isRequired,
}

export default SignedOutMenu;