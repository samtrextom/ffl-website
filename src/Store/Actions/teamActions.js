import { firestoreReducer } from "react-redux-firebase"

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

export const toggleKeep=(player)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore = getFirestore()
        console.log(player)

        firestore.collection('teams').doc(player.teamId).get().then(function(doc) {
            if (doc.exists) {

                var tempArray = doc.data().teamPlayers
                var index = null

                for(var i=0; i<tempArray.length; i++){
                    if(tempArray[i].id===player.id){index=i}
                }

                if(index !=null){
                    tempArray.splice(index,1,{...player,keep:!player.keep})
                    firestore.collection('teams').doc(player.teamId).update({
                        teamPlayers:tempArray
                    }).then(()=>{
                        dispatch({type:'TOGGLE_SUCCESS'})
                    }).catch((err)=>{
                        dispatch({type:'TOGGLE_ERROR',err})
                    })
                }                

            } else {

                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
}

export const addPlayersToTeam=(data)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore = getFirestore()
        
        data.teams.forEach(team => {
            var teamPlayers=[]
            data.players.forEach(player=>{
                if(player.owner===team.ownerId){teamPlayers.push({...player,teamId:team.id})}
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
