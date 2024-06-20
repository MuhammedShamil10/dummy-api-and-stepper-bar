import { useEffect, useRef, useState } from "react";

type Step = {
  description: string;
  completed: boolean;
  selected: boolean;
  highlighted?: boolean;
};

type StepperProps = {
  steps: string[];
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  setCurrentStep
}) => {
  const [newStep, setNewStep] = useState<Step[]>([]);
  console.log(newStep.length - 1, 'newStep');
  
  const stepRef = useRef<Step[]>([]);

  const updateStep = (stepNumber: number, steps: Step[]): Step[] => {
    const newSteps = [...steps];

    let count = 1;
    
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState: Step[] = steps.map((step, index) => ({
      description: step,
      completed: index === 0 ? true : false,
      selected: index === 0 ? true : false,
    }));

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    console.log(currentStep, 'sdf');
    
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => ( console.log(index ,'in'),
  
    <div
      key={index}
      className={
        index !== newStep.length - 1
          ? "w-full flex items-center"
          : "flex items-center"
      }
    >
      <div className="relative flex flex-col items-center text-[#2E4053]">
        <div
          onClick={() => {
            setCurrentStep(index + 1);
          }}
          className={`rounded-full transition duration-500 ease-in-out cursor-pointer
                  border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${
                    step.selected
                      ? "bg-[#2E4053] text-white font-bold border border-[#2E4053]"
                      : ""
                  }`}
        >
          {step.completed ? (
            <span className="text-white font-bold text-xl">&#10003;</span>
          ) : (
            index + 1
          )}
        </div>
        <div
          className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
            step.highlighted ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {step.description}
        </div>
      </div>
      <div
        className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
          step.completed ? "border-[#2E4053]" : ""
        }`}
      ></div>
    </div>
  ));

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};
