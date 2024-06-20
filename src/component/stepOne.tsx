import { useId } from "react";
import { StepperProps } from "../type";

export const StepOne = ({
  setUserInputDetails,
  userInputDetails,
}: StepperProps) => {
  const id = useId();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    
    setUserInputDetails({
      ...userInputDetails,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <h3
        className="  uppercase py-2 px-4  font-semibold 
     "
      >
        Enter Your Details
      </h3>
      <div className="flex flex-row  items-center gap-3">
        <label htmlFor="">Enter Your Name:</label>
        <input
          id={id}
          type="text"
          className="w-56 p-2 border rounded-lg"
          placeholder="Levi"
          name="name"
          value={userInputDetails.name}
          onChange={handleChangeName}
        />
      </div>
      <div className="flex flex-row  items-center gap-3">
        <label htmlFor="">Enter Your Number:</label>
        <input
          id={id}
          type="text"
          name="number"
          value={userInputDetails.number}
          className="w-56 p-2 border rounded-lg"
          placeholder="9207672346"
          onChange={handleChangeName}
        />
      </div>
    </div>
  );
};
