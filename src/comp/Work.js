import React, { Component } from 'react';

function Work({item}) {
    return (  
        <div className="experience">
        <div className="experience-heading">
          <h4>{item["job"]}</h4>
          <div className="experience-details">
            {item["jobplace"]}  
             |
            <span className="bold">
               {item["jobfrom"]}
              -
              {item["jobto"]}
            </span>
          </div>
        </div>
        <div>
        {item["jobdesc"]}
        </div>
      </div>
    );
}

export default Work;