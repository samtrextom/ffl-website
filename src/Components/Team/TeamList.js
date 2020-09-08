import React from 'react'
import TeamSummary from'./TeamSummary'
import {Link} from 'react-router-dom'

const TeamList = ({teams, ftvalues}) =>{

    return(
        <div className="team-list section">
            {teams && teams.map(team=>{

                return(
                    <Link to={{pathname:'/team/'+team.id, state:{team:team, ftvalues:ftvalues}}} key={team.ownerId}>
                        <TeamSummary team={team} ftvalues={ftvalues} key={team.ownerId}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default TeamList