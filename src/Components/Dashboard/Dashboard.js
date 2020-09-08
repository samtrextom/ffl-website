import React from 'react'
import Notifications from './Notifications'
import TeamList from '../Team/TeamList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends React.Component{
   
    render(){

        const {auth, ftvalues, teams}=this.props

        const qbft = ftvalues?ftvalues[0].qb:null
        const rbft = ftvalues?ftvalues[0].rb:null
        const wrft = ftvalues?ftvalues[0].wr:null
        const teft = ftvalues?ftvalues[0].te:null

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
                        <TeamList teams={teams1} ftvalues={ftvalues} key={1}/>
                    </div>
                    <div className="col s12 m4">
                        <h6>Division Two</h6>
                        <TeamList teams={teams2} ftvalues={ftvalues} key={2}/>
                    </div>
                    <div className="col s12 m4">
                        <Notifications/>
                    </div>
                </div>
                <div className="row">
                    <h5>Conference Two</h5>
                    <div className="col s12 m4">
                        <h6>Division One</h6>
                        <TeamList teams={teams3} ftvalues={ftvalues} key={3}/>
                    </div>
                    <div className="col s12 m4">
                        <h6>Division Two</h6>   
                        <TeamList teams={teams4} ftvalues={ftvalues} key={4}/>
                    </div>
                    <div className="col s12 m4 franchise-tags">
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
                                    <td>${qbft}</td>
                                </tr>
                                <tr>
                                    <td>RB:</td>
                                    <td>${rbft}</td>
                                </tr>
                                <tr>
                                    <td>WR:</td>
                                    <td>${wrft}</td>
                                </tr>
                                <tr>
                                    <td>TE:</td>
                                    <td>${teft}</td>
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
        ftvalues: state.firestore.ordered.ftvalues
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'teams'},
        {collection:'ftvalues'}
    ])
)(Dashboard)