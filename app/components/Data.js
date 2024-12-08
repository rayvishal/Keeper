import * as React from "react";

import { Card, Strong } from "@chakra-ui/react";

import { Button } from "@/components/ui/button";
import { LuCheck, LuX } from "react-icons/lu";
import { List } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const DataComponent = ({ data, handleUpdateModal, handleDeleteTodoCard }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        alignItems: "center",
        justifyContent: "center",
        // padding: "20px",
        maxWidth: "1400px",
        margin: "0 auto",
        marginTop: "70px",
      }}
    >
      {data.length > 0 ? (
        data.map((e, index) => (
          <Card.Root width="370px" key={index}>
            <Card.Body>
              <Card.Description>
                <Strong color="fg"> {data[index].title}</Strong>
                <div style={{ marginLeft: "10px", marginTop: "3px" }}>
                  <List.Root as="ol">
                    {data[index].todo.length > 0
                      ? data[index].todo.map((e, index) => (
                          <List.Item key={index}> {e}</List.Item>
                        ))
                      : null}
                  </List.Root>
                </div>
              </Card.Description>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="subtle"
                onClick={() => {
                  handleDeleteTodoCard(index);
                }}
                colorPalette="red"
                flex="1"
              >
                <LuX />
                Delete
              </Button>
              <Button
                variant="subtle"
                onClick={() => {
                  handleUpdateModal(index, e);
                }}
                colorPalette="blue"
                flex="1"
              >
                <LuCheck />
                Update
              </Button>
            </Card.Footer>
          </Card.Root>
        ))
      ) : (
        <div style={{ textAlign: "center" }}>
          <Heading size="5xl">Add Task</Heading>
        </div>
      )}
    </div>
  );
};

export default DataComponent;
