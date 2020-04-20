import React from 'react';
import './App.style.scss';

import SearchBar from '../searchBar/searchBar.component';
import SearchResults from '../searchResults/searchResults.component';
import PlayList from '../playlist/playlist.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchResults: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 1}, 
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
      ],
      playlistName: 'Favorite Songs',
      playlistTracks: [
        {name: 'favsong', artist: 'favartist', album: 'favalbum', id: 4},
        {name: 'nextfav', artist: 'secondBest', album: 'whatev', id: 5},
        {name: 'thirdbest', artist: 'whodat', album: 'debutStar', id: 6}
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className='highlight'>mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className='App-playlist'>
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack} />
            <PlayList 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack} 
              onNameChange={this.updatePlaylistName} 
              onSave={this.savePlaylist} />
          </div>
        </div>    
      </div>
    )
  }
}

export default App;
