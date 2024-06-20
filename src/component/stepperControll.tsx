import { Modal } from "flowbite-react";
import { useState } from "react";
import check from "../assest/check.png";

type StepperControllerProp = {
  handleClick: (direction: string) => void;
  steps: string[];
  currentStep: number;
  setUserInputDetails: React.Dispatch<
    React.SetStateAction<{
      name: string;
      number: string;
      addressOne: string;
      addressTwo: string;
      category: string[];
      payment: {
        cardNumber: string;
        cardHolderName: string;
        month: string;
        year: string;
        cvv: string;
      };
    }>
  >;
};

export const StepperController = ({
  handleClick,
  currentStep,
  setUserInputDetails,
}: StepperControllerProp) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="container flex justify-around mt-8 mb-8">
      <button
        onClick={() => handleClick("Prev")}
        className={`bg-white text-slate-400  py-2 px-4 rounded-xl font-semibold 
      cursor-pointer border-2 border-slate-300 hover:bg-slate-700
       hover:text-white transition duration-200 ease-in-out `}
      >
        Prev
      </button>
      {currentStep > 4 ? (
        <button
          className="bg-black text-white  py-2 px-4 rounded-xl font-semibold cursor-pointer border-2
       border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
          onClick={() => {
            setOpenModal(true);
            setUserInputDetails({
              name: "",
              number: "",
              addressOne: "",
              addressTwo: "",
              category: [""],
              payment: {
                cardNumber: "",
                cardHolderName: "",
                month: "",
                year: "",
                cvv: "",
              },
            });
          }}
        >
          Confirm
        </button>
      ) : (
        <button
          onClick={() => {
            handleClick("Next");
          }}
          className="bg-black text-white  py-2 px-4 rounded-xl font-semibold cursor-pointer border-2
       border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        >
          Next
        </button>
      )}

      <Modal
        className="p-96  bg-black"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="bg-slate-300 flex justify-between items-center">
          <h3 className="text-slate-950">Order Placed</h3>
          <img src={check} alt="" width={90} />
        </Modal.Header>
      </Modal>
    </div>
  );
};
