const initState={

}

const teamreducer=(state = initState, action)=>{

    switch(action.type){
        case 'CREATE_TEAM':
            console.log('created team', action.team)
            return state
        case 'CREATE_TEAM_ERROR':
            console.log('create team error', action.err)
            return state
        case 'CREATE_PLAYER':
            console.log('created player', action.player)
            return state
        case 'CREATE_PLAYER_ERROR':
            console.log('create player error', action.err)
            return state
        case 'TOGGLE_SUCCESS':
            console.log('toggle success')
            return state
        case 'TOGGLE_ERROR':
            console.log('toggle error', action.err)
            return state
        case 'ADD_PLAYER_TO_TEAM_SUCCESS':
            console.log('players added')
            return state
        case 'ADD_PLAYER_TO_TEAM_ERROR':
            console.log('player add error', action.err)
            return state
        default:
            return state
    }
}

export default teamreducer