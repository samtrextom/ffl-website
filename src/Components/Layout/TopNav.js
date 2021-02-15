import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import {useAuth} from '../../Context/AuthContext'
import {useHistory} from 'react-router-dom'
import {Alert} from '@material-ui/lab'
import SideMenu from './SideMenu'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

export default function TopNav() {

    const [error, setError] = useState('')
    const [drawer, setDrawer] = useState(false)
    const {logout} = useAuth()
    const history = useHistory()
    const logoutButtonStyle ={
        position: 'absolute',
        right: 0
    }

    async function handleLogout(){
        setError('')

        try{
            await logout()
            history.push('/signin')
        }catch{
            setError('Failed to log out')
        }
    }

    const toggleDrawer = (e) =>{
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return;
          }
        setDrawer(!drawer)
    }

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <div onClick={toggleDrawer}>
                        <IconButton edge="start"  color="inherit" aria-label="menu">
                            <MenuIcon  fontSize="large" />
                        </IconButton>
                    </div>
                    <Typography variant="h6">
                        TI4 Drafter
                    </Typography>
                    <Button style={logoutButtonStyle} color="inherit" onClick={handleLogout}><ExitToAppIcon fontSize="large"/></Button>
                </Toolbar>
            </AppBar>
            {error && <Alert severity="error">{error}</Alert>}
            <Drawer anchor={'left'} open={drawer} onClose={toggleDrawer}>
                <SideMenu toggleDrawer={toggleDrawer}/>
            </Drawer>
        </React.Fragment>
        
    )
}
