import React from 'react';
import './playlist.style.scss';

class PlayList extends React.Component {
  render() {
    return (
      <div className='Playlist'>
        <input defaultValue={'New Playlist'} />
        {/* tracklist component */}
        <button className='Playlist-save-btn'>SAVE TO SPOTIFY</button>
      </div>
    )
  }
};

export default PlayList;