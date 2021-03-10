export const selectedPicture = (picture) => {
    return{
        type: 'SELECTED_PICTURE',
        payload: picture
    }
}

export const selectedPicturesAction = (picture) => {
    return{
        type: 'SELECTED_PICTURES',
        payload: picture
    }
}