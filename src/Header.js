import { Container } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "navy",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
      }}
    >
      <h1>User Management</h1>
    </Container>
  );
};

export default Header;
