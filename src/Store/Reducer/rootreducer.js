import teamreducer from './teamreducer'
import {combineReducers} from 'redux'
import authreducer from './authreducer'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootreducer = combineReducers({
    auth: authreducer,
    team: teamreducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootreducer