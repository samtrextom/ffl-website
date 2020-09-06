import React from 'react'
import {getFtvalues, getNextYearSalary} from '../../Store/Actions/mathActions'

const TeamSummary = ({team, players}) =>{

    const ftvalues = getFtvalues(players)
    const teamPlayers = team?players?players.filter(player=>(player.owner===team.ownerId)):null:null
    var budget = 250
    var keeperTotal = 0
    var keepers=[]

    const sure = teamPlayers?teamPlayers.forEach(player=>{
        if(player.keep){keeperTotal+= getNextYearSalary({player,ftvalues}); keepers.push(player)}
    }):null

    var qbTotal=0
    var rbTotal=0
    var wrTotal=0
    var teTotal=0
    var dstTotal=0
    var kTotal=0

    keepers.forEach(player=>{
        switch(player.position){
            case 'QB':{qbTotal++; break}
            case 'RB':{rbTotal++; break}
            case 'WR':{wrTotal++; break}
            case 'TE':{teTotal++; break}
            case 'D/ST':{dstTotal++; break}
            case 'K':{kTotal++; break}
            defaut:{break}
        }
    })

    return(
        <div className="card z-depth-1 team-summary">
            <span className="card-title">{team.name}</span>
            <p>{team.ownerFirstName?team.ownerFirstName:'No Owner'}</p>
            <div>
                <span>Keepers: {keepers.length}</span><span> Budget: ${budget-keeperTotal}</span>
            </div>
            <div>
                <span>QB: {qbTotal} </span><span>RB: {rbTotal} </span><span>WR: {wrTotal} </span><span>TE: {teTotal} </span><span>D/ST: {dstTotal} </span><span>K: {kTotal} </span>
            </div>
        </div>
    )
}

export default TeamSummary