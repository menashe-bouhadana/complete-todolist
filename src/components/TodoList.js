import React, { useEffect, useState } from "react";
import "../styles/TodoList.css";
import CreateTask from "./createTask";
import Task from "./Task";

export default function TodoList() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const completeTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  const cancel = () => {
    setModal(false);
  };

  return (
    <>
      <div className="header text-center d-flex flex-column justify-content-center align-items-center">
        <h1>TodoList</h1>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container mt-3 p-5 mx-auto">
        {taskList.map((obj, index) => (
          <Task
            taskObj={obj}
            index={index}
            complete={completeTask}
            updateListArray={updateListArray}
            cancel={cancel}
          />
        ))}
      </div>
      <CreateTask
        toggle={toggle}
        modal={modal}
        save={saveTask}
        cancel={cancel}
      />
    </>
  );
}
