import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID UtnVfSj7bp5s4cfvGxeXDirHQ38ZDViGa05bs3akX4A'
        },
        params: {
            query: term,
        }
    });
    return response.data.results;
}

export default searchImages;