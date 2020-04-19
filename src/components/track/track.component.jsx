import React from 'react';
import './track.style.scss';

class Track extends React.Component {

  renderAction() {
    if (isRemoval) {
      return <button className='Track-action-btn'>+</button>
    } else {
      return <button className='Track-action-btn'>-</button>
    }
  }

  render() {
    return (
      <div className='Track'>
        <div className='Track-information'>
          <h3>{/* track name will go here */}</h3>
          <p>{/* track artist will go here */} | {/* track album will go here */}</p>
        </div>
        <button className='Track-action-btn'>{/* + or - will go here */}</button>
      </div>
    )
  }
};

export default Track;