import React  from "react";
import Heading from "./heading";
import Work from "./Work";
import Schooling from "./Schooling";

export class ComponentToPrint extends React.PureComponent {
    render() {
      return (
        <div className="CV-view"> 
        <Heading {...this.props.obj}/>
            <div className="experience-list">
              <h3>Work Experience</h3>
              <Work {...this.props.obj} />
            </div>
            <div className="experience-list">
              <h3>School Experience</h3>
              <Schooling {...this.props.obj} />
            </div>
            
            
          </div>
      );
    }
  }