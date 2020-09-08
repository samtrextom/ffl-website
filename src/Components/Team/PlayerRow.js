import React, {useState} from 'react'
import { toggleKeep } from '../../Store/Actions/teamActions'
import {connect} from 'react-redux'

const PlayerRow =props=>{
    
    var [tempPlayer, setPlayer ]= useState(props.player)

    console.log(props)

    const handleClick=()=>{       

        if(tempPlayer.keep){
            setPlayer({...tempPlayer, keep:false})
        }else{
            setPlayer({...tempPlayer, keep:true})
        }
        console.log(tempPlayer.keep)
        props.toggleKeep(tempPlayer)
    }

    if(props.ftvalues){
    return(
        <tr className={tempPlayer.keep?'green lighten-5':''}>
            <td className="player-table">{props.player.name}</td>
            <td className="player-team-table">{props.player.team}</td>
            <td className="position-table">{props.player.position}</td>
            <td className="salary-table">${props.player.salary}</td>
            <td className="service-time-table">{props.player.servicetime}</td>
            {props.player.servicetime>2?
            <td className="new-salary-table">${props.player.position==='QB'?
                props.ftvalues[0].qb:props.player.position==='RB'?
                props.ftvalues[0].rb:props.player.position==='WR'?
                props.ftvalues[0].wr:props.player.position==='TE'?
                props.ftvalues[0].te:5}&nbsp;(FT)</td>:props.player.salary<5?
                    <td className="new-salary-table">$5</td>:props.player.salary<10?
                    <td className="new-salary-table">$10</td>:<td className="new-salary-table">${Math.floor(props.player.salary*1.1)}</td>}
            <td>{props.auth.uid===props.team.ownerId?
                !tempPlayer.keep?
                    <button onClick={handleClick} className=" btn-small green lighten-1 table-button">Keep</button>:
                    <button onClick={handleClick} className=" btn-small red lighten-1 table-button">Unkeep</button>:
                    !tempPlayer.keep?null:<p className="player-kept">Kept</p>}</td>
        </tr>
    )}else{return(<tr><td>...Loading</td></tr>)}
    
}

const mapDispatchToProps=(dispatch)=>{
    return {toggleKeep: (player)=>dispatch(toggleKeep(player))}
}

export default connect(null,mapDispatchToProps)(PlayerRow)