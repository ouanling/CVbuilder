import React from 'react';

function Schooling({schooling}) {
    return ( 
        <div className="experience">
        <div className="experience-heading">
          <h4>{schooling[0]["diploma"]}</h4>
          <div className="experience-details">
          {schooling[0]["school"]}
            |
            <span className="bold">
            {schooling[0]["schoolfrom"]}
              -
              {schooling[0]["schoolto"]}
            </span>
          </div>
        </div>
        <div>{schooling[0]["desc"]}</div>
      </div>
     );
}

export default Schooling;