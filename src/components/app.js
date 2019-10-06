import React from 'react';
import axios from 'axios';
import Searchbar from './SearchBar';


class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) =>{
        const response = await axios
            .get('https://api.unsplash.com/search/photos',{
                params:{ query: term },
                headers: {
                    Authorization: 'Client-ID fc5696cb8ef536c364e5b99e5c7ee32a89fa0e290b7d8eee6a68155dfd08993b'
                }
            });
            this.setState({ images: response.data.results });
    }

render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>    
                <Searchbar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App