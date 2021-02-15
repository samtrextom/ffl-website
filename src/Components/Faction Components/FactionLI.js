import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'

export default function FactionLI({faction, toggleModal}) {

    const style = {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
        marginBottom: 5,
        borderStyle: 'solid',
        borderWidth:1,
        borderRadius:5,
        width:300
    }

    return (
        <ListItem key={faction.id} button onClick={()=>toggleModal(faction)} style={style}>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${faction.name}`}
                src={faction.avatar}
              />
            </ListItemAvatar>
            <ListItemText id={faction.id} primary={faction.name} />
          </ListItem>
    )
}
