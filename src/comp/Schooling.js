import React from 'react';

function Schooling({item}) {
    return ( 
        <div className="experience">
        <div className="experience-heading">
          <h4>{item["diploma"]}</h4>
          <div className="experience-details">
          {item["school"]}
            |
            <span className="bold">
            {item["schoolfrom"]}
              -
              {item["schoolto"]}
            </span>
          </div>
        </div>
        <div>{item["desc"]}</div>
      </div>
     );
}

export default Schooling;