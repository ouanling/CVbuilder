function SchoolEdit({handleChange, handleAdd, handleDel, item, ind, long}) {
    
    return (
      <div className="SchoolAdd">
        <input
          type="text"
          name="diploma"
          onChange={(ev) => handleChange(ev, "schooling", ind)}
          value={item.diploma}
        ></input>
        <input
          type="text"
          name="school"
          onChange={(ev) => handleChange(ev, "schooling", ind)}
          value={item.school}
        ></input>
        <input
          type="text"
          name="schoolfrom"
          onChange={(ev) => handleChange(ev, "schooling", ind)}
          value={item.schoolfrom}
        ></input>
        <input
          type="text"
          name="schoolto"
          onChange={(ev) => handleChange(ev, "schooling", ind)}
          value={item.schoolto}
        ></input>
        <input
          type="text"
          name="desc"
          onChange={(ev) => handleChange(ev, "schooling", ind)}
          value={item.desc}
        ></input>
        <div className="btnwrap" style={ (long -1 === ind) ? {} : {paddingBottom: "36px"}}>
          <button onClick={() => handleDel("schooling", ind)} >Delete</button>
          { (long -1 === ind) && <button onClick={() => handleAdd("schooling")}>Add</button>}
        </div>
      </div>
    );
  }
  
  export default SchoolEdit;