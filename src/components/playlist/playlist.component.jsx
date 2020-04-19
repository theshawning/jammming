import React from 'react';
import './playlist.scss';

class Playlist extends React.Component {
  render() {
    return (
      <div className='Playlist'>
        <input defaultValue={'New Playlist'} />
        {/* tracklist component */}
        <button className='Playlist-save'>SAVE TO SPOTIFY</button>
      </div>
    )
  }
};

export default Playlist;