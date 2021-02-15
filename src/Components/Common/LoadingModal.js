import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function LoadingModal() {
    return (
        <div className="loading-modal">
            <div className="loading-modal-icon">...Loading <CircularProgress /></div>
        </div>
    )
}
