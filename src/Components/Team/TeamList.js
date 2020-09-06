import React from 'react'
import TeamSummary from'./TeamSummary'
import {Link} from 'react-router-dom'

const TeamList = ({teams, players}) =>{

    return(
        <div className="team-list section">
            {teams && teams.map(team=>{

                return(
                    <Link to={'/team/'+team.id} key={team.ownerId}>
                        <TeamSummary team={team} players={players} key={team.ownerId}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default TeamList