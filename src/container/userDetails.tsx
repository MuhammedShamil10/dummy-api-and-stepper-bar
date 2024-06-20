import { useState } from "react";
import { useAddUser } from "../api/user/useCreateUser";
import { useGetUserList } from "../api/user/useGetUserList";
import { UserCreate } from "../component/userCreation/userCreate";
import { useUpdateUser } from "../api/user/useUpdateUser";
import { Box, Modal, Typography } from "@mui/material";
import { useUserDelete } from "../api/user/useRemoveUser";

export const UserDataList = () => {
  const { data: userResponse, isLoading } = useGetUserList();
  const [nameInput, setNameInput] = useState<string>("");
  const [jobInput, setJobInput] = useState<string>("");

  const [updateName, setUpdateName] = useState<string>("");
  const [updateJob, setUpdateJob] = useState<string>("");

  const [updateUserId, setUpdateUserId] = useState<number | null>(null);

  const { mutateAsync: userCreate } = useAddUser();
  const { mutateAsync: userUpdate } = useUpdateUser();
  const { mutateAsync: userDelete } = useUserDelete();

  const [open, setOpen] = useState(false);
  const handleOpen = (user: any) => {
    setUpdateUserId(user.id);
    setOpen(true);
  };
  const handleClose = () => {
    setUpdateUserId(null);
    setOpen(false);
  };

  // console.log(userResponse, "user response");

  const handleSubmit = async (name: string, job: string) => {
    setNameInput(name);
    setJobInput(job);
    try {
      await userCreate({ name, job });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const updateUserHandleSubmit = async () => {
    if (updateUserId !== null) {
      await userUpdate({
        id: updateUserId,
        name: updateName,
        job: updateJob,
      });
    }
  };

  const deleteUser = async (id: number) => {
    await userDelete(id);
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
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div>
            {userResponse?.data.map((option) => (
              <div className="flex flex-col flex-wrap" key={option.id}>
                <img src={option.avatar} alt="" />
                <span onClick={handleOpen} className="cursor-pointer">
                  {option.last_name}
                </span>
                <span>{option.email}</span>
                <button
                  onClick={() => deleteUser(option.id)}
                  className="cursor-pointer border p-2 font-medium text-white bg-red-600"
                >
                  Delete User
                </button>
              </div>
            ))}
          </div>
          <UserCreate onSubmit={handleSubmit} />
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <Typography variant="h6" component="h2">
                Edit user
              </Typography>
              <Typography
                sx={{ mt: 2 }}
                className="flex flex-col justify-center"
              >
                <form onClick={updateUserHandleSubmit} action="">
                  <div className="flex flex-col items-center">
                    <label htmlFor="">Name: </label>
                    <input
                      className="border bg-slate-100 p-2 rounded-md"
                      placeholder="Enter Name"
                      type="text"
                      id="updateName"
                      value={updateName}
                      onChange={(e) => setUpdateName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <label htmlFor="">Job: </label>
                    <input
                      className="border bg-slate-100 p-2 rounded-md"
                      placeholder="Enter Job"
                      type="text"
                      id="updateJob"
                      value={updateJob}
                      onChange={(e) => setUpdateJob(e.target.value)}
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
        </>
      )}
    </>
  );
};
