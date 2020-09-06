import React from 'react'
import {addPlayersToTeam} from '../../Store/Actions/teamActions'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class AddPlayersToTeam extends React.Component{

    addPlayersToTeam=()=>{
        var data ={
            players:this.props.players,
            teams:this.props.teams
        }

        this.props.addPlayersToTeam(data)
    }
    

    render(){

        const {players, teams}=this.props
        
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr ><td></td><td><button className="btn blue lighten-1" onClick={this.addPlayersToTeam}>Add Players</button></td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        players:state.firestore.ordered.players,
        teams:state.firestore.ordered.teams
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{addPlayersToTeam:(data)=>dispatch(addPlayersToTeam(data))}
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection:'teams'},
        {collection:'players'}
    ])
)(AddPlayersToTeam)