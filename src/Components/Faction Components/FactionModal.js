import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {NavLink, useRouteMatch} from 'react-router-dom'


export default function FactionModal({faction, open, close}) {

    const {url} = useRouteMatch()

    return (
        <Dialog onClose={()=>{close(null)}} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">{faction.name} Quick Ref</DialogTitle>
            <DialogContent>
          <DialogContentText>
            Quick Reference
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{close(null)}} color="primary">
            Close
          </Button>
          <Button onClick={()=>{close(null)}} component={NavLink} to={`${url}/${faction.code}`} color="primary">
            More Details
          </Button>
        </DialogActions>
      </Dialog>
    )
}
