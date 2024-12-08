"use client";
import React, { useEffect, useState } from "react";
// import * as React from 'react';

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
// import { styles } from "../page.module.css";
// import ModalComponent from
import DataComponent from "./Data";
import UpdateModal from "./UpdateModal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const ModalComponent = () => {
  const [updateValue, setUpdateValue] = useState({});
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState([""]);
  const [open, setOpen] = React.useState(false);
  const [updateOpen, SetUpdateOpen] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState([]);
  const [updatedTitle, setUpdatedTitle] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTodo([""]);
    setTitle("");
  };

  function addListInput() {
    setTodo([...todo, ""]);
  }
  function saveData() {
    let obj = {
      title: title,
      todo: todo,
    };
    setData([...data, obj]);

    handleClose();
    setTodo([""]);
    setTitle("");
    // sentDataToLocalStorage = false;
    console.log(data);
  }

  console.log(localStorage.getItem("todos"), "localStorage");
  function handleUpdateModal(index, e) {
    console.log(e, index);
    setUpdateValue(e);
    SetUpdateOpen(true);
    setUpdateIndex(index);
    e.todo.map((e) => {
      updatedTodo.push(e);
    });
    console.log(updatedTodo, "updatetodo");
    setUpdatedTitle(e.title);
  }
  function handleUpdateClose() {
    SetUpdateOpen(false);
    setUpdatedTitle("");
    setUpdatedTodo([]);
  }
  function addListInputInUpdateModale() {
    setUpdatedTodo([...updatedTodo, ""]);
  }
  function updateData() {
    let updatedValue = {
      title: updatedTitle,
      todo: updatedTodo,
    };
    data.splice(updateIndex, 1, updatedValue);
    const newData = data.slice(0);
    handleUpdateClose();
    setUpdatedTodo([]);
    setUpdatedTitle("");
    setData(newData);
  }
  function handleDeleteTodoCard(index) {
    let userConsent = prompt("Are you sure you want to delete it", "yes");
    if (userConsent == "yes" || userConsent == "Yes") {
      console.log(userConsent);
      data.splice(index, 1);
      const updatedData = data.slice(0);
      setData(updatedData);

      console.log(data);
    }
  }
  useEffect(() => {
    let getDataFromLocalS = localStorage.getItem("todos");
    console.log(getDataFromLocalS, "useef");
    if (getDataFromLocalS == null) {
    } else {
      setData(JSON.parse(getDataFromLocalS));
    }
  }, []);
  useEffect(() => {
    console.log("rending");
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);
  console.log("delete");
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Button onClick={handleOpen} variant="contained" color="success">
          Create Todo
        </Button>
      </div>

      <div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <TextField
              // label="Multiline Placeholder"
              placeholder="Title"
              multiline
              variant="filled"
              fullWidth
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <div>
              {todo.length > 0
                ? todo.map((e, index) => {
                    return (
                      <div key={index}>
                        <TextField
                          id="outlined-textarea"
                          placeholder="Add todo"
                          multiline
                          onChange={(e) => {
                            const text = e.target.value;
                            todo.splice(index, 1, text);
                            console.log(todo, "todo");
                          }}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <Button variant="contained" color="info" onClick={addListInput}>
                Add List Input
              </Button>
              <Button variant="contained" color="success" onClick={saveData}>
                Save
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
      <DataComponent
        data={data}
        handleUpdateModal={handleUpdateModal}
        handleDeleteTodoCard={handleDeleteTodoCard}
      />
      {/* update modale */}
      <UpdateModal
        updateOpen={updateOpen}
        handleUpdateClose={handleUpdateClose}
        style={style}
        updateValue={updateValue}
        setUpdatedTitle={setUpdatedTitle}
        updatedTodo={updatedTodo}
        addListInputInUpdateModale={addListInputInUpdateModale}
        updateData={updateData}
      />
    </div>
  );
};

{
  /* <div>
        <Modal open={updateOpen} onClose={handleUpdateClose}>
          <Box sx={style}>
            {updateValue.hasOwnProperty("title") ? (
              <div>
                <TextField
                  label="Title"
                  placeholder="Title"
                  multiline
                  variant="filled"
                  fullWidth
                  defaultValue={updateValue.title}
                  onChange={(e) => {
                    setUpdatedTitle(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                {updatedTodo.length > 0
                  ? updatedTodo.map((e, index) => {
                      return (
                        <div key={index}>
                          <TextField
                            id="outlined-textarea"
                            placeholder="Add todo"
                            defaultValue={updatedTodo[index]}
                            multiline
                            onChange={(e) => {
                              const text = e.target.value;
                              updatedTodo.splice(index, 1, text);
                              console.log(updatedTodo, "updtodo");
                            }}
                          />
                        </div>
                      );
                    })
                  : null}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "9px",
                  }}
                >
                  <Button
                    variant="contained"
                    color="info"
                    onClick={addListInputInUpdateModale}
                  >
                    Add List Input
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={updateData}
                  >
                    Save
                  </Button>
                </div>
              </div>
            ) : null}
          </Box>
        </Modal>
      </div> */
}
//     </div>
//   );
// };
