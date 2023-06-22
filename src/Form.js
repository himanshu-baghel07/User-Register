import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

const Form = ({ handleAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddUser(email, name, phone);
    resetForm();
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;

    const sanitizedInput = input.replace(/\D/g, "");

    const formattedPhone = sanitizedInput.slice(0, 10);
    setPhone(formattedPhone);
  };

  return (
    <Container
      maxWidth={false}
      id="form"
      sx={{
        width: "100%",
        height: "20vh",
        color: "white",
        overflowY: "hidden",
      }}
    >
      <h1>User Register</h1>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 5,
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          variant="filled"
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
          }}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          variant="filled"
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
          }}
        />

        <TextField
          label="Phone"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          required
          variant="filled"
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
          }}
        />

        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
    </Container>
  );
};

export default Form;
