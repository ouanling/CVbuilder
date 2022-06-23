import React, { useRef } from "react";
import { placehold } from "./placeholder";
import Heading from "./comp/heading";
import Work from "./comp/Work";
import Schooling from "./comp/Schooling";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./comp/Printer";




function App() {
  const [infoObj, setInfoObj] = React.useState(placehold);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
  function handleChange(ev, arrays) {
    const { name, value } = ev.target
    if (arrays) {
    const tempData = [...infoObj[arrays]];
    tempData[0][name] = value;
    setInfoObj({...infoObj, arrays: tempData })
    }

    
    else {setInfoObj(prevInfoObj => { 
      return {...prevInfoObj, [name]: value};
    })}
  }; 
 
  return (
    
  <div className="CV-container">
        <div className="CV-edit"> 
        <h3>Personnal Details</h3>
          <input type="text" name="name" onChange={handleChange} value={infoObj.name}></input>
          <input type="text" name="title" onChange={handleChange} value={infoObj.title}></input>
          <input type="text" name="phone" onChange={handleChange} value={infoObj.phone}></input>
          <input type="email" name="mail" onChange={handleChange} value={infoObj.mail}></input>
          <input type="text" name="city" onChange={handleChange} value={infoObj.city}></input>
          <input type="text" name="intro" onChange={handleChange} value={infoObj.intro}></input>
        <h3>Work Experience</h3>
          <input type="text" name="job" onChange={ev => handleChange(ev, 'work')} value={infoObj.work[0]["job"]}></input>
          <input type="text" name="jobplace" onChange={ev => handleChange(ev, 'work')} value={infoObj.work[0]["jobplace"]}></input>
          <input type="text" name="jobfrom" onChange={ev => handleChange(ev, 'work')} value={infoObj.work[0]["jobfrom"]}></input>
          <input type="text" name="jobto" onChange={ev => handleChange(ev, 'work')} value={infoObj.work[0]["jobto"]}></input>
          <input type="text" name="jobdesc" onChange={ev => handleChange(ev, 'work')} value={infoObj.work[0]["jobdesc"]}></input>
          <div className="btnwrap">
            <button>Delete</button>
            <button>Add</button>
          </div>
        <h3>Education</h3>
          <input type="text" name="diploma" onChange={ev => handleChange(ev, 'schooling')} value={infoObj.schooling[0]["diploma"]}></input>
          <input type="text" name="school" onChange={ev => handleChange(ev, 'schooling')} value={infoObj.schooling[0]["school"]}></input>
          <input type="text" name="schoolfrom" onChange={ev => handleChange(ev, 'schooling')} value={infoObj.schooling[0]["schoolfrom"]}></input>
          <input type="text" name="schoolto" onChange={ev => handleChange(ev, 'schooling')} value={infoObj.schooling[0]["schoolto"]}></input>
          <input type="text" name="desc" onChange={ev => handleChange(ev, 'schooling')} value={infoObj.schooling[0]["desc"]}></input>
          <div className="btnwrap">
            <button>Delete</button>
            <button>Add</button>
          </div>
        </div>
        <div className="CV-view"> 
        <Heading {...infoObj}/>
            <div className="experience-list">
              <h3>Work Experience</h3>
              <Work {...infoObj} />
            </div>
            <div className="experience-list">
              <h3>School Experience</h3>
              <Schooling {...infoObj} />
            </div>
            
            
          </div>
          <div style={{display: "none"}}>
            <ComponentToPrint obj={infoObj} ref={componentRef} />
          
          </div>
          <button onClick={handlePrint}>Print to PDF</button>

        </div> 
  
  );
}

export default App;
