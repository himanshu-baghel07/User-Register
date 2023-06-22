import React, { useReducer } from "react";
import ModalView from "./ModalView";
import "./App.css";
import Form from "./Form";
import Reducer from "./Reducer";
import { ADD_USER, DELETE_USER, EDIT_USER } from "./actions.type";
import { v4 as uuidv4 } from "uuid";
import { Container, Grid } from "@mui/material";

const App = () => {
  const [state, dispatch] = useReducer(Reducer, []);

  const ID = uuidv4();
  const handleAddUser = (email, name, phone) => {
    dispatch({
      type: ADD_USER,
      payload: {
        id: ID,
        email: email,
        name: name,
        phone: phone,
      },
    });
  };

  const handleChangeUser = (id, email, phone, name) => {
    dispatch({
      type: EDIT_USER,
      payload: {
        id,
        email,
        phone,
        name,
      },
    });
  };
  const handleDeleteUser = (id) => {
    dispatch({
      type: DELETE_USER,
      id,
    });
  };

  return (
    <div id="container">
      <Form handleAddUser={handleAddUser} />
      <div
        id="data"
        style={{
          width: "100%",
          height: "75vh",
          overflowY: "auto",
          padding: "1%",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            {state.map((user) => (
              <Grid item xs={12} sm={6} md={4} key={user.id}>
                <ModalView
                  handleChangeUser={handleChangeUser}
                  user={user}
                  handleDeleteUser={handleDeleteUser}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default App;
