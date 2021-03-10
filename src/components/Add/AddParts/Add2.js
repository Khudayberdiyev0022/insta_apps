import React,{useEffect, useState} from 'react'
import axios from "axios";
import {selectedPicture} from '../../../actions'
import {connect} from 'react-redux'

function Add2(props) {
    const [photos, setPhotos] = useState([])

    useEffect( () => {
       const fetchData = async () => {
           const response = await axios.get('https://api.unsplash.com/search/photos', {
           params: {query: 'user', per_page: 30},
           headers:{
                       Authorization:'Client-ID EtDTsD-Dj0GnmULLppDNvvrB-s8DDUBngK5_ZUehlAQ'
                   }
           })
           setPhotos(response.data.results)
       }
       fetchData()
   }, [])
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
            {
                photos.map((photo, index) => {
                    return(
                        <div key={index} style={{backgroundImage: `url(${photo.urls.regular})`, width: '125px',height: '125px', backgroundPosition: 'center', backgroundSize: 'cover'}} onClick={() => props.selectedPicture(photo)}>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default connect(null, {selectedPicture})(Add2)
