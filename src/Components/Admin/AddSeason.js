import React from 'react'
import Select from 'react-select'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {updateSeason} from '../../Store/Actions/adminActions'

class AddSeason extends React.Component{

    state={
        year:'',
        week:'',
        game1owner1:'',
        game1owner2:'',
        game1owner1score:'',
        game1owner2score:'',
        game2owner1:'',
        game2owner2:'',
        game2owner1score:'',
        game2owner2score:'',
        game3owner1:'',
        game3owner2:'',
        game3owner1score:'',
        game3owner2score:'',
        game4owner1:'',
        game4owner2:'',
        game4owner1score:'',
        game4owner2score:'',
        game5owner1:'',
        game5owner2:'',
        game5owner1score:'',
        game5owner2score:'',
        game6owner1:'',
        game6owner2:'',
        game6owner1score:'',
        game6owner2score:'',
        game7owner1:'',
        game7owner2:'',
        game7owner1score:'',
        game7owner2score:'',
        game8owner1:'',
        game8owner2:'',
        game8owner1score:'',
        game8owner2score:''
    }

    handleChange=(e)=>{
        console.log(e)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        //this.props.updateSeason(this.state)
    }

    render(){

        const {users, seasons}=this.props

        const seassonOptions = seasons?seasons.map(season=> ({label:season.year,value:season.id})):null
        const userOptions = users?users.map(user=>({label:user.firstName+' '+user.lastName, value:user.id})):null

        return(
            <div>
                <h2>Add a new season</h2>
                <form>
                    <div className="input-field">
                        <label htmlFor="year">Year</label>
                        <Select options={seassonOptions} onChange={this.handleChange} inputId='year'></Select>
                    </div>
                    <div className="input-field">
                        <label htmlFor="week">Week</label>
                        <input type="text" id="week" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr><td><h6>Game 1</h6></td></tr>
                                <tr>
                                    <td>
                                        <label>Owner 1</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game1owner1'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game1owner1score">Owner 1 Score</label>
                                            <input type="number" id="game1owner1score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                    <td>
                                        <label>Owner 2</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game1owner2'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game1owner2score">Owner 2</label>
                                            <input type="number" id="game1owner2score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr><td><h6>Game 2</h6></td></tr>
                                <tr>
                                    <td>
                                        <label>Owner 1</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game2owner1'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game2owner1score">Owner 1 Score</label>
                                            <input type="number" id="game2owner1score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                    <td>
                                        <label>Owner 2</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game2owner2'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game2owner2score">Owner 2</label>
                                            <input type="number" id="game2owner2score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr><td><h6>Game 3</h6></td></tr>
                                <tr>
                                    <td>
                                        <label>Owner 1</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game3owner1'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game3owner1score">Owner 1 Score</label>
                                            <input type="number" id="game3owner1score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                    <td>
                                        <label>Owner 2</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game3owner2'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game3owner2score">Owner 2</label>
                                            <input type="number" id="game3owner2score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr><td><h6>Game 4</h6></td></tr>
                                <tr>
                                    <td>
                                        <label>Owner 1</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game4owner1'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game4owner1score">Owner 1 Score</label>
                                            <input type="number" id="game4owner1score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                    <td>
                                        <label>Owner 2</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game4owner2'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game4owner2score">Owner 2</label>
                                            <input type="number" id="game4owner2score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr><td><h6>Game 5</h6></td></tr>
                                <tr>
                                    <td>
                                        <label>Owner 1</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game5owner1'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game5owner1score">Owner 1 Score</label>
                                            <input type="number" id="game5owner1score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                    <td>
                                        <label>Owner 2</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game5owner2'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game5owner2score">Owner 2</label>
                                            <input type="number" id="game5owner2score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr><td><h6>Game 6</h6></td></tr>
                                <tr>
                                    <td>
                                        <label>Owner 1</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game6owner1'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game6owner1score">Owner 1 Score</label>
                                            <input type="number" id="game6owner1score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                    <td>
                                        <label>Owner 2</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game6owner2'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game6owner2score">Owner 2</label>
                                            <input type="number" id="game6owner2score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr><td><h6>Game 7</h6></td></tr>
                                <tr>
                                    <td>
                                        <label>Owner 1</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game7owner1'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game7owner1score">Owner 1 Score</label>
                                            <input type="number" id="game7owner1score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                    <td>
                                        <label>Owner 2</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game7owner2'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game7owner2score">Owner 2</label>
                                            <input type="number" id="game7owner2score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr><td><h6>Game 8</h6></td></tr>
                                <tr>
                                    <td>
                                        <label>Owner 1</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game8owner1'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game8owner1score">Owner 1 Score</label>
                                            <input type="number" id="game8owner1score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                    <td>
                                        <label>Owner 2</label>
                                        <Select options={userOptions} onChange={this.handleChange} inputId='game8owner2'></Select>
                                    </td>
                                    <td>
                                        <div className="input-field">
                                            <label htmlFor="game8owner2score">Owner 2</label>
                                            <input type="number" id="game8owner2score" onChange={this.handleChange}/>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{

    return{
        auth: state.firebase.auth,
        users: state.firestore.ordered.users,
        seasons: state.firestore.ordered.seasons
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        updateSeason: (season)=> dispatch(updateSeason(season))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection:'users'},
        {collection:'seasons'}
    ])
)(AddSeason)