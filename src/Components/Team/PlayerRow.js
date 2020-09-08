import React, {useState} from 'react'
import { toggleKeep } from '../../Store/Actions/teamActions'
import {connect} from 'react-redux'

const PlayerRow =props=>{
    
    var [tempPlayer, setPlayer ]= useState(props.player)

    const handleClick=()=>{       

        if(tempPlayer.keep){
            setPlayer({...tempPlayer, keep:false})
        }else{
            setPlayer({...tempPlayer, keep:true})
        }
        console.log(tempPlayer.keep)
        props.toggleKeep(tempPlayer)

        ////////DATABASE UPDATE TEAMID
    }

    return(
        <tr className={tempPlayer.keep?'green lighten-5':''}>
            <td>{props.player.name}</td>
            <td>{props.player.team}</td>
            <td>{props.player.position}</td>
            <td>${props.player.salary}</td>
            <td>{props.player.servicetime} years</td>
            {props.player.servicetime>2?
            <td>${props.player.position==='QB'?
                props.ftvalues.qbft:props.player.position==='RB'?
                props.ftvalues.rbft:props.player.position==='WR'?
                props.ftvalues.wrft:props.player.position==='TE'?
                props.ftvalues.teft:5}&nbsp;(Franchise Tag)</td>:props.player.salary<5?
                    <td>$5</td>:props.player.salary<10?
                    <td>$10</td>:<td>${Math.floor(props.player.salary*1.1)}</td>}
            <td>{props.auth.uid===props.team.ownerId?!tempPlayer.keep?<button onClick={handleClick} className=" btn green lighten-1">Keep</button>:null:null}</td>
            <td>{props.auth.uid===props.team.ownerId?tempPlayer.keep?<button onClick={handleClick} className=" btn red lighten-1">Unkeep</button>:null:tempPlayer.keep?<p>Kept</p>:null}</td>
        </tr>
    )
    
}

const mapDispatchToProps=(dispatch)=>{
    return {toggleKeep: (player)=>dispatch(toggleKeep(player))}
}

export default connect(null,mapDispatchToProps)(PlayerRow)