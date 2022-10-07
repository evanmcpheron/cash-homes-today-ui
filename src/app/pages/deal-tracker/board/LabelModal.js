import { Button, Modal, Paper, Typography, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { newLabel } from "../store/labelsSlice";

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
  display: "flex",
  flexDirection: "column",
};

const LabelModal = ({ openLabel, handleCloseLabel }) => {
  const [labelField, setLabelField] = useState("");
  const dispatch = useDispatch();

  function onSubmit(title) {
    dispatch(newLabel(title));
    setLabelField("");
  }

  return (
    <Modal
      open={openLabel}
      onClose={() => handleCloseLabel(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit Labels
        </Typography>
        <TextField
          value={labelField}
          onChange={(e) => setLabelField(e.target.value)}
        />

        <Button
          className="w-full"
          variant="outlined"
          color="success"
          onClick={() => onSubmit(labelField)}
        >
          Add
        </Button>
      </Paper>
    </Modal>
  );
};

export default LabelModal;
