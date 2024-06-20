import { useState } from "react";
import { StepOne } from "../component/stepOne";
import { StepTwo } from "../component/stepTwo";
import { Stepper } from "../component/stepper";
import { StepperController } from "../component/stepperControll";
import { steps } from "./constant/stepperItems";
import { StepThree } from "../component/stepThree";
import { StepFour } from "../component/stepFour";
import { Confirmation } from "../component/confirmation";

export const PaymentDetails = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [userInputDetails, setUserInputDetails] = useState({
    name: "",
    number: "",
    addressOne: "",
    addressTwo: "",
    category: [''],
    payment: {
      cardNumber: "",
      cardHolderName: "",
      month: "",
      year: "",
      cvv: "",
    },
  });
  console.log(userInputDetails, "userData");

  const handleInputChange = (direction: string) => {
    let newStep = currentStep;
    direction === "Next" ? newStep++ : newStep--;
    if (newStep < 1) {
      return;
    }
    setCurrentStep(newStep);
  };

  const displayStep = (step: number) => {
    console.log(step, "step");
    console.log(currentStep, "currentStep");

    switch (step) {
      case 1:
        return (
          <StepOne
            setUserInputDetails={setUserInputDetails}
            userInputDetails={userInputDetails}
          />
        );
      case 2:
        return (
          <StepTwo
            setUserInputDetails={setUserInputDetails}
            userInputDetails={userInputDetails}
          />
        );
      case 3:
        return (
          <StepThree
            setUserInputDetails={setUserInputDetails}
            userInputDetails={userInputDetails}
          />
        );
      case 4:
        return (
          <StepFour
            setUserInputDetails={setUserInputDetails}
            userInputDetails={userInputDetails}
          />
        );
      case 5:
        return (
          <Confirmation
            setUserInputDetails={setUserInputDetails}
            userInputDetails={userInputDetails}
          />
        );
      default:
    }
  };

  return (
    <div className="md:w-1/2  mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className=" mt-5">
        <Stepper
          setCurrentStep={setCurrentStep}
          steps={steps}
          currentStep={currentStep}
        />
      </div>
      <div className="flex justify-center items-center p-5 h-96">
        {displayStep(currentStep)}
      </div>
      <StepperController
        handleClick={handleInputChange}
        setUserInputDetails={setUserInputDetails}
        steps={steps}
        currentStep={currentStep}
      />
    </div>
  );
};
