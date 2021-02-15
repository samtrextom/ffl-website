import React from 'react'
import {List, ListItem, ListItemText} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {routes} from '../../Data/Routes'

export default function SideMenu({toggleDrawer}) {

    return (
        <List>
        {routes.map((item, index) => (
          <ListItem button key={index} onClick={toggleDrawer}>
            <Link to={item.link}><ListItemText>{item.text}</ListItemText></Link>
          </ListItem>))}
        </List>
    )
}
