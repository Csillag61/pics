import  axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 729e1a02e4c638422882b65a6c69d928fdf5fdd3c5716756c4a2a8a9452aa89d'
    }
});