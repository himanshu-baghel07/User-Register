import { Email, Person, PhoneIphone } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const ModalView = ({ user, handleChangeUser, handleDeleteUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newName, setNewName] = useState(user.name);
  const [newPhone, setNewPhone] = useState(user.phone);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDone = () => {
    handleClose();
    handleChangeUser(user.id, newEmail, newPhone, newName);
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;

    const sanitizedInput = input.replace(/\D/g, "");

    const formattedPhone = sanitizedInput.slice(0, 10);
    setNewPhone(formattedPhone);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  console.log("jim", user.email);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              textAlign: "center",
              marginBottom: "10px",
              fontSize: "1.5rem",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Change User Details
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Person />
            <TextField
              fullWidth
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Email />
            <TextField
              fullWidth
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PhoneIphone />
            <TextField
              fullWidth
              value={newPhone}
              onChange={handlePhoneChange}
            />
          </Box>
          <br />
          <Button
            sx={{
              backgroundColor: "green",
              color: "white",
              "&:hover": {
                backgroundColor: "darkgreen",
              },
            }}
            fullWidth
            onClick={handleDone}
          >
            Done
          </Button>
        </Box>
      </Modal>
      <Box>
        <Card
          id="card"
          key={user.id}
          variant="outlined"
          sx={{
            maxWidth: "400px",
            fontSize: "2rem",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                wordBreak: "break-word",
                margin: "10px",
                fontSize: "1.2rem",
              }}
            >
              <Person />
              {user.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                wordBreak: "break-word",
                margin: "10px",
                fontSize: "1.2rem",
              }}
            >
              <Email /> {user.email}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                wordWrap: "break-word",
                display: "flex",
                alignItems: "center",
                gap: 1,
                wordBreak: "break-word",
                margin: "10px",
                fontSize: "1.2rem",
              }}
            >
              <PhoneIphone /> {user.phone}
            </Typography>

            <Button
              sx={{
                backgroundColor: "green",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
              }}
              fullWidth
              onClick={handleOpen}
            >
              Edit
            </Button>
            <Button
              sx={{
                backgroundColor: "red",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkred",
                },
              }}
              fullWidth
              onClick={() => handleDeleteUser(user.id)}
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default ModalView;
