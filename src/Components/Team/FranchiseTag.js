import React from 'react'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {connect} from 'react-redux'

const FranchiseTag =(props)=>{

    if(props.ftvalues){
        return(
            <div>
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
                            <td>${props.ftvalues[0].qb}</td>
                        </tr>
                        <tr>
                            <td>RB:</td>
                            <td>${props.ftvalues[0].rb}</td>
                        </tr>
                        <tr>
                            <td>WR:</td>
                            <td>${props.ftvalues[0].wr}</td>
                        </tr>
                        <tr>
                            <td>TE:</td>
                            <td>${props.ftvalues[0].te}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }else{return(<div>...Loading</div>)}
    
}

const mapStateToProps=(state)=>{
    return{
        ftvalues: state.firestore.ordered.ftvalues
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
    {collection:'ftvalues'}
    ])
)(FranchiseTag)