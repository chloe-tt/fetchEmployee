import React from 'react';
  
function DisplayEmployee({ employee }) {
  return (
    <div className="DisplayEmployee">
      
      <ul>
        <li> {employee.lastname}</li>
        <li>
          {employee.description}
        </li>
     
      </ul>
    </div>
  );
};


  
export default DisplayEmployee;