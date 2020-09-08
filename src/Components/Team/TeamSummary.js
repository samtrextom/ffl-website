import React from 'react'
import {getNextYearSalary} from '../../Store/Actions/mathActions'

const TeamSummary = ({team, ftvalues}) =>{

    const teamPlayers = team?team.teamPlayers:null
    var budget = 250
    var keeperTotal = 0
    var keepers=[]

    const sure = teamPlayers&&ftvalues?teamPlayers.forEach(player=>{
        if(player.keep){keeperTotal+= getNextYearSalary({player,ftvalues}); keepers.push(player);}
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
        <div className="card z-depth-1 team-summary box">
            <span className="team-title">{team.name}</span>
            <span className="card-owner"> - {team.ownerFirstName?team.ownerFirstName:'No Owner'}</span>
            <div>
                <span className="card-keepers">Keepers: {keepers.length}</span>
                <span className="card-budget"> Budget: ${budget-keeperTotal}</span>
            </div>
            <div>
                <span className="card-position">QB: {qbTotal} </span>
                <span className="card-position">RB: {rbTotal} </span>
                <span className="card-position">WR: {wrTotal} </span>
                <span className="card-position">TE: {teTotal} </span>
                <span className="card-position">D/ST: {dstTotal} </span>
                <span className="card-position">K: {kTotal} </span>
            </div>
        </div>
    )
}

export default TeamSummary