function WorkEdit({handleChange, handleAdd, handleDel, item, ind, long}) {
    
  return (
    <div className="WorkAdd">
      <input
        type="text"
        name="job"
        onChange={(ev) => handleChange(ev, "work", ind)}
        value={item.job}
      ></input>
      <input
        type="text"
        name="jobplace"
        onChange={(ev) => handleChange(ev, "work", ind)}
        value={item.jobplace}
      ></input>
      <input
        type="text"
        name="jobfrom"
        onChange={(ev) => handleChange(ev, "work", ind)}
        value={item.jobfrom}
      ></input>
      <input
        type="text"
        name="jobto"
        onChange={(ev) => handleChange(ev, "work", ind)}
        value={item.jobto}
      ></input>
      <input
        type="text"
        name="jobdesc"
        onChange={(ev) => handleChange(ev, "work", ind)}
        value={item.jobdesc}
      ></input>
      <div className="btnwrap" style={ (long -1 === ind) ? {} : {paddingBottom: "36px"}}>
        <button onClick={() => handleDel("work", ind)} >Delete</button>
        { (long -1 === ind) && <button onClick={() => handleAdd("work")}>Add</button>}
      </div>
    </div>
  );
}

export default WorkEdit;
