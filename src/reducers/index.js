import {combineReducers} from 'redux'
import img from '../assets/img/1.jpg'

const selectPicture = (state=img, action) => {
    switch (action.type) {
        case 'SELECTED_PICTURE':
            return action.payload
        default:
            return state
    }
}

const selectedPictures = (state=[], action) => {
    switch (action.type) {
        case 'SELECTED_PICTURES':
            return [...state, action.payload]
        default:
            return state
    }
}

export default combineReducers({
    selectPicture: selectPicture,
    selectedPictures:selectedPictures
    // selectPicture
})