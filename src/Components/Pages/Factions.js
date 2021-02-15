import React, {useState} from 'react'
import List from '@material-ui/core/List'
import FactionLI from '../Faction Components/FactionLI'
import {factions} from '../../Data/Factions'
import FactionModal from '../Faction Components/FactionModal'

export default function Factions() {

    const [open, setOpen] = useState(false)
    const [selectedFaction, setSelectedFaction] = useState(null)

    const toggleModal =(faction)=>{
        setOpen(!open)
        setSelectedFaction(faction)
    }

    const style = {
        width:'100%'
    }

    return (
        <div>
            <h2>Factions</h2>
            <List style={style}>
                {factions.map((faction)=>{
                    return <FactionLI faction={faction} toggleModal={toggleModal}/>
                })}
            </List>
            {selectedFaction && <FactionModal faction={selectedFaction} open={open} close={toggleModal}/>}
        </div>
    )
}
