import React from 'react';

import './styles.scss';

const MapMarker = () => {

  return (
    <div>
      <div
        className="pin bounce"
        style={{cursor: 'pointer'}}
      />
      <div className="pulse"/>
    </div>
  );
};

export default MapMarker;