import React, { useRef } from "react";
import { placehold } from "./placeholder";
import Heading from "./comp/heading";
import Work from "./comp/Work";
import Schooling from "./comp/Schooling";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./comp/Printer";
import WorkEdit from "./comp/WorkEdit";
import SchoolEdit from "./comp/SchoolEdit";

function App() {
  const [infoObj, setInfoObj] = React.useState(placehold);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  function handleChange(ev, arrays, indexe) {
    const { name, value } = ev.target;
    const idid = indexe;
    if (arrays) {
      const tempData = [...infoObj[arrays]];
      tempData[idid][name] = value;
      setInfoObj({ ...infoObj, arrays: tempData });
    } else {
      setInfoObj((prevInfoObj) => {
        return { ...prevInfoObj, [name]: value };
      });
    }
  }

  function handleAdd(ev) {
    const newobj = (ev) => {
      if (ev === "work") {
        return {
          job: "",
          jobplace: "",
          jobfrom: "",
          jobto: "",
          jobdesc: "",
        };
      } else {
        return {
          diploma: "",
          school: "",
          schoolfrom: "",
          schoolto: "",
          desc: "",
        };
      }
    };
    const tempData = [...infoObj[ev]];
    tempData.push(newobj);
    setInfoObj({ ...infoObj, [ev]: tempData });
  }

  function handleDel(ev, ind) {
    const newarr = infoObj[ev].filter((item, index) => index !== ind);
    setInfoObj({ ...infoObj, [ev]: newarr });
  }
  return (
    <div className="CV-container">
      <button className="printerbtn" onClick={handlePrint}>Print to PDF</button>
      <div className="CV-edit">
        <h3>Personnal Details</h3>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={infoObj.name}
        ></input>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={infoObj.title}
        ></input>
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={infoObj.phone}
        ></input>
        <input
          type="email"
          name="mail"
          onChange={handleChange}
          value={infoObj.mail}
        ></input>
        <input
          type="text"
          name="city"
          onChange={handleChange}
          value={infoObj.city}
        ></input>
        <input
          type="text"
          name="intro"
          onChange={handleChange}
          value={infoObj.intro}
        ></input>
        <h3>Work Experience</h3>
        <div>
          {infoObj["work"].length === 0 ? (
            <button onClick={() => handleAdd("work")}>Add</button>
          ) : (
            infoObj["work"].map((item, index) => (
              <WorkEdit
                key={index + "w"}
                long={infoObj["work"].length}
                ind={index}
                handleChange={handleChange}
                handleAdd={handleAdd}
                handleDel={handleDel}
                item={item}
              />
            ))
          )}
        </div>

        <h3>Education</h3>
        {infoObj["schooling"].length === 0 ? (
          <button onClick={() => handleAdd("schooling")}>Add</button>
        ) : (
          infoObj["schooling"].map((item, index) => (
            <SchoolEdit
              key={index + "s"}
              long={infoObj["schooling"].length}
              ind={index}
              handleChange={handleChange}
              handleAdd={handleAdd}
              handleDel={handleDel}
              item={item}
            />
          ))
        )}
      </div>
      <div className="CV-view">
        <Heading {...infoObj} />
        <div className="experience-list">
          <h3>Work Experience</h3>
          <div>
            {infoObj["work"].map((item, index) => (
              <Work key={index + "w"} item={item} />
            ))}
          </div>
        </div>
        <div className="experience-list">
          <h3>School Experience</h3>
          <div>
            {infoObj["schooling"].map((item, index) => (
              <Schooling key={index + "s"} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <ComponentToPrint obj={infoObj} ref={componentRef} />
      </div>
      {/* <button className="printerbtn" onClick={handlePrint}>Print to PDF</button> */}
    </div>
  );
}

export default App;
