import React from 'react';
  
function DisplaySimpson({ simpson }) {
  return (
    <div className="DisplaySimpson">
      
      <ul>
        <li> {simpson.lastname}</li>
        <li>
          {simpson.description}
        </li>
     
      </ul>
    </div>
  );
};


  
export default DisplaySimpson;