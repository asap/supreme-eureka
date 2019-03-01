import React from 'react';

const PatientsListSearchBar = props => {
  return (
    <div className="ui search">
      <input
        className="prompt"
        type="text"
        placeholder="Search patients..."
        value={props.searchTerm}
        onChange={props.onUpdateSearchTerm}
      />
    </div>
  );
};

export default PatientsListSearchBar;
