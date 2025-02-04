import { Box, Modal } from "@mui/material";
import { useState } from "react";
import Typography from "@mui/material/Typography";

type InputProp = {
  onSubmit: (nameInput: string, jobInput: string) => void;
};

export const UserCreate = ({ onSubmit }: InputProp) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [nameInput, setNameInput] = useState("");
  const [jobInput, setJobInput] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onSubmit(nameInput, jobInput);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="border h-14 w-56 text-white rounded-md bg-green-600"
      >
        upload new user
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Add user
          </Typography>
          <Typography sx={{ mt: 2 }} className="flex flex-col justify-center">
            <form onClick={handleSubmit} action="">
              <div className="flex flex-col items-center">
                <label htmlFor="">Name: </label>
                <input
                  className="border bg-slate-100 p-2 rounded-md"
                  placeholder="Enter Name"
                  type="text"
                  id="nameInput"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center">
                <label htmlFor="">Job: </label>
                <input
                  className="border bg-slate-100 p-2 rounded-md"
                  placeholder="Enter Job"
                  type="text"
                  id="jobInput"
                  value={jobInput}
                  onChange={(e) => setJobInput(e.target.value)}
                />
              </div>
              <button
                onClick={handleClose}
                type="submit"
                className="bg-green-600 mt-2 p-2 rounded-lg text-white font-bold "
              >
                Submit
              </button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
