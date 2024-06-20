import { useId, useState } from "react";
import { StepperProps } from "../type";

export const StepTwo = ({
  userInputDetails,
  setUserInputDetails,
}: StepperProps) => {
  const id = useId();
  const [inputAddressOne, setInputAddressOne] = useState("");
  const [inputAddressTwo, setInputAddressTwo] = useState("");

  const handleAddressOne = (event: { target: { value: any } }) => {
    let value = event.target.value;
    setInputAddressOne(value);
    setUserInputDetails({
      ...userInputDetails,
      addressOne: inputAddressOne,
      addressTwo: inputAddressTwo,
    });
  };
  const handleAddressTwo = (event: { target: { value: any } }) => {
    let value = event.target.value;
    setInputAddressTwo(value);
    setUserInputDetails({
      ...userInputDetails,
      addressOne: inputAddressOne,
      addressTwo: inputAddressTwo,
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <h3
        className="uppercase py-2 px-4  font-semibold 
     "
      >
        Enter Your Address
      </h3>
      <div className="flex flex-row  items-start gap-3">
        <label htmlFor="">Enter address 1:</label>
        <textarea
          className="border"
          placeholder="mumbai street 001"
          onChange={handleAddressOne}
        />
      </div>
      <div className="flex flex-row  items-start gap-3">
        <label htmlFor="">Enter address 2:</label>

        <textarea
          className="border"
          placeholder="bangalore street 007"
          onChange={handleAddressTwo}
        />
      </div>
    </div>
  );
};
