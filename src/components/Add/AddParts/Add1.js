import React from 'react'
import {connect} from 'react-redux'
import img from '../../../assets/img/1.jpg'
import {selectedPicturesAction} from '../../../actions'

function Add1(props) {
    const style = {
        width: '100%',
        height: '60vh',
        backgroundImage: `url(${props.picture.urls ? props.picture.urls.regular : img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    return (
        <div style={style} onDoubleClick={() => props.selectedPicturesAction(props.picture)}>
            
        </div>
    )
} 
const mapStateToProps = (state)=> {
    return{
        picture: state.selectPicture
    }
}



export default connect(mapStateToProps, {selectedPicturesAction})(Add1)
