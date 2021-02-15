import React from 'react'
import {factions} from '../../Data/Factions'

export default function FactionDetail(props) {

    const facID = props.match.params.id
    const faction  = factions.find(f=>f.code === facID)

    return (
        <div>
            <h2>{faction.name}</h2>
        </div>
    )
}
