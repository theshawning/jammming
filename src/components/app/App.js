import React from 'react';
import './App.style.scss';

import SearchBar from '../searchBar/searchBar.component';
import SearchResults from '../searchResults/searchResults.component';
import PlayList from '../playlist/playlist.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchResults: [] };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className='highlight'>mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className='App-playlist'>
            <SearchResults />
            <PlayList />
          </div>
        </div>    
      </div>
    )
  }
}

export default App;
