import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PlayerRow from './PlayerRow'
import {getNextYearSalary} from '../../Store/Actions/mathActions'
import {Redirect} from'react-router-dom'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

class TeamDetails extends React.Component{

    render(){

        const {role, auth, team, ftvalues} = this.props

        const teamPlayers = team?team.teamPlayers:null

        var budget = 250

        var keeperTotal = 0

        const sure = teamPlayers&&ftvalues?teamPlayers.forEach(player=>{
            if(player.keep){keeperTotal+= getNextYearSalary({player,ftvalues})}
        }):null

        if(!auth.uid) return <Redirect to='/signin'/>

        if(team){
            return(
            <div className="container section team-details">
                <div className="card z-depth-0">
                    <span className="card-title">{team.name} </span> <div className="details-budget">Remaining Budget: ${budget-keeperTotal}</div>
                    {role==="admin"?<div><Link to={'/edit/'+team.ownerId}>Edit</Link></div>:null}
                    <table>
                        <thead>
                            <tr>
                                <th className="table-head">Name</th>
                                <th className="table-head">Team</th>
                                <th className="table-head">Pos</th>
                                <th className="table-head">LYS</th>
                                <th className="table-head">ST</th>
                                <th className="table-head">Sal</th>
                                <th></th>
                                {/* <th><button onClick={this.onSave}>Save</button></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {teamPlayers && teamPlayers.map(player=>{
                                return(<PlayerRow player={player} ftvalues={ftvalues} team={team} auth={auth}key={player.id}/>)
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
        ftvalues: state.firestore.ordered.ftvalues,
        role: state.firebase.profile.role
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'teams'},
        {collection:'ftvalues'}
    ])
)(TeamDetails)
