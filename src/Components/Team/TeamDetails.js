import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import PlayerRow from './PlayerRow'
import {getFtvalues, getNextYearSalary} from '../../Store/Actions/mathActions'
import {Redirect} from'react-router-dom'

class TeamDetails extends React.Component{

    render(){
        const {team, players, role, auth} = this.props

        const ftvalues = getFtvalues(players)

        const teamPlayers = team?players?players.filter(player=>(player.owner===team.ownerId)):null:null

        var budget = 250

        var keeperTotal = 0

        const sure = teamPlayers?teamPlayers.forEach(player=>{
            if(player.keep){keeperTotal+= getNextYearSalary({player,ftvalues})}
        }):null

        if(!auth.uid) return <Redirect to='/signin'/>

        if(team){
            return(
            <div className="container section team-details">
                <div className="card z-depth-0">
                    <span className="card-title">{team.name}</span>
                    {role==="admin"?<div><Link to={'/edit/'+team.ownerId}>Edit</Link></div>:null}
                    <table>
                        <thead>
                            <tr>
                                <th className="player-table">Player</th>
                                <th className="player-team-table">Team</th>
                                <th className="position-table">Position</th>
                                <th className="salary-table">Old Salary</th>
                                <th className="service-time-table">Service Time</th>
                                <th className="new-salary-table">New Salary</th>
                                <th>Remaining Budget: ${budget-keeperTotal}</th>
                                {/* <th><button onClick={this.onSave}>Save</button></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {teamPlayers && teamPlayers.map(player=>{
                                return(<PlayerRow player={player} ftvalues={ftvalues} team={team} key={player.id}/>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>)
        } else{
            return(
                <div>
                    <p>...Loading Team</p>
                </div>
            )
        }
    }
}

const mapStateToProps=(state, ownProps)=>{
    const id = ownProps.match.params.id
    const teams = state.firestore.ordered.teams
    const team = teams? teams.find(team=>team.id===id):null

    return{
        auth: state.firebase.auth,
        team: team,
        players:state.firestore.ordered.players,
        role: state.firebase.profile.role
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'teams',
        collection:'players'}
    ])
)(TeamDetails)