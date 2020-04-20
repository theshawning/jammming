import React from 'react';
import './playlist.style.scss';

import TrackList from '../tracklist/tracklist.component';

class PlayList extends React.Component {
  render() {
    return (
      <div className='Playlist'>
        <input defaultValue={'New Playlist'} />
        <TrackList 
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove} 
          isRemoval={true} />
        <button className='Playlist-save-btn'>SAVE TO SPOTIFY</button>
      </div>
    )
  }
};

export default PlayList;