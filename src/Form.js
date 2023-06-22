import { Button, Container, Input, Typography } from "@mui/material";
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
        height: "100%",
        color: "white",
        overflowY: "hidden",
        paddingBottom: "1%",
      }}
    >
      <Typography
        sx={{
          marginBottom: { md: "2%", sm: "5%", xs: "1%" },
          textAlign: "center",
          fontSize: { md: " 2.5rem", sm: "2.5rem", xs: "1.5rem" },
        }}
      >
        User Register
      </Typography>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 5,
        }}
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Name"
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
        <Input
          placeholder="Email"
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

        <Input
          placeholder="Phone"
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
