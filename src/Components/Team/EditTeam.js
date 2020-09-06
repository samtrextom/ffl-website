import React from 'react'
import PlayerRow from './PlayerRow'
import {connect} from 'react-redux'
import {createPlayer} from '../../Store/Actions/teamActions'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'

class EditTeam extends React.Component{

    state={
        name:'',
        team:'',
        position:'',
        salary:'',
        servicetime:'',
        owner: this.props.match.params.id
    }

    

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.createPlayer(this.state)
        this.setState({
            name:'',
            team:'',
            position:'',
            salary:'',
            servicetime:'',
            owner: this.props.match.params.id
        })
    }

    render(){

        const {players, auth}=this.props
        const id=this.props.match.params.id

        console.log(id)

        if(!auth.uid) return <Redirect to='/signin'/>

        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <th className="player-table">Player</th>
                                <th className="player-team-table">Team</th>
                                <th className="position-table">Position</th>
                                <th className="salary-table">Salary</th>
                                <th className="service-time-table">Service Time</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {players && players.map(player=>{
                                if(player.owner===id){
                                    return(
                                        <PlayerRow player={player} key={player.id}/>
                                    )
                                }
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <div className="input-field">
                                        <label htmlFor="name">Player</label>
                                        <input type="text" id="name" onChange={this.handleChange}/>
                                    </div>
                                </td>
                                <td>
                                    <div className="input-field">
                                        <label htmlFor="team">Team</label>
                                        <input type="text" id="team" onChange={this.handleChange}/>
                                    </div>
                                </td>
                                <td>
                                    <div className="input-field">
                                        <label htmlFor="position">Position</label>
                                        <input type="text" id="position" onChange={this.handleChange}/>
                                    </div>
                                </td>
                                <td>
                                    <div className="input-field">
                                        <label htmlFor="salary">Salary</label>
                                        <input type="number" id="salary" onChange={this.handleChange}/>
                                    </div>
                                </td>
                                <td>
                                    <div className="input-field">
                                        <label htmlFor="servicetime">Service Time</label>
                                        <input type="number" id="servicetime" onChange={this.handleChange}/>
                                    </div>
                                </td>
                                <td>
                                    <div className="input-field">
                                        <button className="btn green lighten-1 z-depth-0">Add Player</button>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        createPlayer: (player)=> dispatch(createPlayer(player))
    }
}

const mapStateToProps=(state)=>{

    return{
        players:state.firestore.ordered.players,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection:'players'}
    ])
)(EditTeam)