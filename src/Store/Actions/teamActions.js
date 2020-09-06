
export const createTeam = (team)=>{
    return(dispatch, getState,{getFirebase, getFirestore})=>{

        const firestore = getFirestore()

        firestore.collection('teams').add({
            ...team
        }).then(()=>{
            dispatch({type: 'CREATE_TEAM', team})
        }).catch((err)=>{
            dispatch({type: 'CREATE_TEAM_ERROR', err})
        })    
    }
}


export const createPlayer=(player)=>{
    return(dispatch, getState,{getFirebase,getFirestore})=>{

        const firestore = getFirestore()

        firestore.collection('players').add({
            ...player,
            keep:false
        }).then(()=>{
            dispatch({type:'CREATE_PLAYER'})
        }).catch((err)=>{
            dispatch({type:'CREATE_PLAYER_ERROR',err})
        })
    }
}

export const toggleKeep=(data)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore = getFirestore()

        // let tempPlayers = []

        // data.team.teamPlayers.forEach(player=>{tempPlayers.push(player)})

        if(data.player.keep){
            firestore.collection('players').doc(data.player.id).set({
                ...data.player,
            keep:false
        }).then(()=>{
            dispatch({type:'TOGGLE_SUCCESS'})
        }).catch((err)=>{
            dispatch({type:'TOGGLE_ERROR',err})
        })


            // var newPlayers = tempPlayers.slice(data.team.teamPlayers.indexOf(data.player))
            // newPlayers.push({...data.player,keep:false})

            // firestore.collection('teams').doc(data.team.id).set({
            //     ...data.team,
            //     teamPlayers: newPlayers
            // }).then(()=>{
            //     dispatch({type:'ADD_PLAYER_TO_TEAM_SUCCESS'})
            // }).catch((err)=>{
            //     dispatch({type:'ADD_PLAYER_TO_TEAM_ERROR',err})
            // })



        }else{
            firestore.collection('players').doc(data.player.id).set({
                ...data.player,
                keep:true
            }).then(()=>{
                dispatch({type:'TOGGLE_SUCCESS'})
            }).catch((err)=>{
                dispatch({type:'TOGGLE_ERROR',err})
            })

            // var newPlayers = tempPlayers.slice(data.team.teamPlayers.indexOf(data.player))
            // newPlayers.push({...data.player,keep:true})

            // firestore.collection('teams').doc(data.team.id).set({
            //     ...data.team,
            //     teamPlayers: newPlayers
            // }).then(()=>{
            //     dispatch({type:'ADD_PLAYER_TO_TEAM_SUCCESS'})
            // }).catch((err)=>{
            //     dispatch({type:'ADD_PLAYER_TO_TEAM_ERROR',err})
            // })
        }
    }
}

export const addPlayersToTeam=(data)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore = getFirestore()
        
        data.teams.forEach(team => {
            var teamPlayers=[]
            data.players.forEach(player=>{
                if(player.owner===team.ownerId){teamPlayers.push(player)}
            })

            firestore.collection('teams').doc(team.id).set({
                ...team,
                teamPlayers: teamPlayers
            }).then(()=>{
                dispatch({type:'ADD_PLAYER_TO_TEAM_SUCCESS',team})
            }).catch((err)=>{
                dispatch({type:'ADD_PLAYER_TO_TEAM_ERROR',err})
            })

        });
    }
}
