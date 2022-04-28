import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function CreateTask({ modal, toggle, save }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDue, setTaskDue] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    }
    if (name === "taskDescription") {
      setTaskDescription(value);
    }
    if (name === "taskDue") {
      setTaskDue(value);
    }
  };

  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = taskDescription;
    taskObj["Due"] = taskDue;
    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name:</label>
            <input
              type="text"
              name="taskName"
              className="form-control"
              value={taskName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="mt-2">Task Description:</label>
            <textarea
              rows="3"
              name="taskDescription"
              className="form-control"
              value={taskDescription}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="mt-2">Task Due:</label>
            <input
              type="date"
              name="taskDue"
              className="form-control"
              value={taskDue}
              onChange={handleChange}
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>
        <Button color="secondary">Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}
