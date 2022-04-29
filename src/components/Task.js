import React, { useState } from "react";
import EditTask from "./EditTask";

export default function Task({
  taskObj,
  index,
  complete,
  updateListArray,
  cancel,
}) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleComplete = () => {
    complete(index);
  };
  return (
    <>
      <div className="border rounded d-flex flex-column justify-content-between p-4 task">
        <h4 className="text-primary">{taskObj.Name}</h4>
        <p>{taskObj.Description ? taskObj.Description : ""}</p>
        <p>
          Due Date: <strong>{taskObj.Due ? taskObj.Due : "None"}</strong>
        </p>
        <div className="d-flex justify-content-between">
          <i
            className="far fa-edit edit"
            style={{ color: "#007bff", cursor: "pointer" }}
            onClick={() => setModal(true)}
          />
          <i
            className="fa-solid fa-square-check complete"
            style={{ color: "#007bff", cursor: "pointer" }}
            onClick={handleComplete}
          />
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        update={updateTask}
        taskObj={taskObj}
        cancel={cancel}
      />
    </>
  );
}
