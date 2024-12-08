import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
const UpdateModal = ({
  updateOpen,
  handleUpdateClose,
  style,
  updateValue,
  setUpdatedTitle,
  updatedTodo,
  addListInputInUpdateModale,
  updateData,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default UpdateModal;
