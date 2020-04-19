import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className='searchBar'>
        <input placeholder='Enter A Song, Album, or Artist' />
        <button className='searchButton'>SEARCH</button>
      </div>
    )
  }
};

export default SearchBar;
