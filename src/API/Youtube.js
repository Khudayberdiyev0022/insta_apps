import axios from 'axios'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        max_result: 4, 
        key: 'AIzaSyBCly-dqdR5WfF36aKxjAswVayYWzbxaYc'
    }
})