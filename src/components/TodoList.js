import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListGroup, Badge } from "react-bootstrap";

function TodoList() {
  const [todos, setTodos] = useState(null);

  const getList = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      setTodos(result.data);
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      {todos && (
        <ListGroup as="ol" numbered>
          {todos.map((el) => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{el.title}</div>
                <input type="checkbox" checked={el.completed} />
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
}

export default TodoList;
