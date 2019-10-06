import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID fc5696cb8ef536c364e5b99e5c7ee32a89fa0e290b7d8eee6a68155dfd08993b'
    }
});