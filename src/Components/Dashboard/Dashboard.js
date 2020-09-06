import React from 'react'
import Notifications from './Notifications'
import TeamList from '../Team/TeamList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import {getFtvalues} from '../../Store/Actions/mathActions'

class Dashboard extends React.Component{
   
    render(){

        const {auth, players, teams}=this.props

        const ftvalues = getFtvalues(players)

        const teams1 = teams?teams.filter(team=>(team.division==='1'&&team.conference==='1')):null
        const teams2 = teams?teams.filter(team=>(team.division==='2'&&team.conference==='1')):null
        const teams3 = teams?teams.filter(team=>(team.division==='1'&&team.conference==='2')):null
        const teams4 = teams?teams.filter(team=>(team.division==='2'&&team.conference==='2')):null

        if(!auth.uid) return <Redirect to='/signin'/>

        return(
            <div className="dashboard container">
                <div className="row">
                    <h5>Conference One</h5>
                    <div className="col s12 m4">
                        <h6>Division One</h6>
                        <TeamList teams={teams1} players={players} key={1}/>
                    </div>
                    <div className="col s12 m4">
                        <h6>Division Two</h6>
                        <TeamList teams={teams2} players={players} key={2}/>
                    </div>
                    <div className="col s12 m4">
                        <Notifications/>
                    </div>
                </div>
                <div className="row">
                    <h5>Conference Two</h5>
                    <div className="col s12 m4">
                        <h6>Division One</h6>
                        <TeamList teams={teams3} players={players} key={3}/>
                    </div>
                    <div className="col s12 m4">
                        <h6>Division Two</h6>   
                        <TeamList teams={teams4} players={players} key={4}/>
                    </div>
                    <div className="col s12 m4">
                        <h4>Franchise Tags</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Amount</th>
                                </tr>   
                            </thead>
                            <tbody>
                                <tr>
                                    <td>QB:</td>
                                    <td>${ftvalues.qbft}</td>
                                </tr>
                                <tr>
                                    <td>RB:</td>
                                    <td>${ftvalues.rbft}</td>
                                </tr>
                                <tr>
                                    <td>WR:</td>
                                    <td>${ftvalues.wrft}</td>
                                </tr>
                                <tr>
                                    <td>TE:</td>
                                    <td>${ftvalues.teft}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    
    return{
        teams: state.firestore.ordered.teams,
        auth: state.firebase.auth,
        players: state.firestore.ordered.players
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'teams'},
        {collection:'players'}
    ])
)(Dashboard)