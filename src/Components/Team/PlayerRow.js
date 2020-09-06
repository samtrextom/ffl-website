import React from 'react'
import { toggleKeep } from '../../Store/Actions/teamActions'
import {connect} from 'react-redux'

class PlayerRow extends React.Component{

    

    render(){

        const player = this.props.player
        const ftvalues = this.props.ftvalues
        const team = this.props.team
        const newSalary = player.servicetime>2?
        <td>${player.position==='QB'?
            ftvalues.qbft:player.position==='RB'?
            ftvalues.rbft:player.position==='WR'?
            ftvalues.wrft:player.position==='TE'?
            ftvalues.teft:5}&nbsp;(Franchise Tag)</td>:player.salary<5?
                <td>$5</td>:player.salary<10?
                    <td>$10</td>:<td>${Math.floor(player.salary*1.1)}</td>

        var name = player.keep?'green lighten-5':null

        const handleClick=()=>{

            this.props.toggleKeep({player,team})
        }

        return(
            <tr className={name}>
                <td>{player.name}</td>
                <td>{player.team}</td>
                <td>{player.position}</td>
                <td>${player.salary}</td>
                <td>{player.servicetime} years</td>
                {newSalary}
                <td>{this.props.authID===this.props.team.ownerId?!player.keep?<button onClick={handleClick} className=" btn green lighten-1">Keep</button>:null:null}</td>
                <td>{this.props.authID===this.props.team.ownerId?player.keep?<button onClick={handleClick} className=" btn red lighten-1">Unkeep</button>:null:player.keep?<p>Kept</p>:null}</td>
            </tr>
        )
    }
}

const mapStateToProps=(state)=>{
    return{authID: state.firebase.auth.uid}
}

const mapDispatchToProps=(dispatch)=>{
    return {toggleKeep: (player)=>dispatch(toggleKeep(player))}
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayerRow)