import React from 'react'
import {connect} from 'react-redux'
import {createTeam} from '../../Store/Actions/teamActions'
import {Redirect} from 'react-router-dom'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import Select from 'react-select'

class CreateTeam extends React.Component{

    state={
        name:'',
        ownerId:'',

    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.createTeam(this.state)
    }

    render(){

        const {auth,users}=this.props

        if(!auth.uid) return <Redirect to='/signin'/>

        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add A New Team</h5>
                    <div className="input-field">
                        <label htmlFor="name">Team Name</label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-3 z-depth-0">Add Team</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{

    return{
        auth: state.firebase.auth,
        users: state.firestore.ordered.users
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createTeam: (team)=> dispatch(createTeam(team))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection:'users'}
    ])
)(CreateTeam)