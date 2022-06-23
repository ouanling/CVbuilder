import React, { Component } from 'react';

function Work({work}) {
    return (  
        <div className="experience">
        <div className="experience-heading">
          <h4>{work[0]["job"]}</h4>
          <div className="experience-details">
            {work[0]["jobplace"]}  
             |
            <span className="bold">
               {work[0]["jobfrom"]}
              -
              {work[0]["jobto"]}
            </span>
          </div>
        </div>
        <div>
        {work[0]["jobdesc"]}
        </div>
      </div>
    );
}

export default Work;