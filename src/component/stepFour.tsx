import React, { useState } from "react";
import card from "../assest/credit-card.png";
import cardCvv from "../assest/security.png";
import { StepperProps } from "../type";

export const StepFour = ({
  userInputDetails,
  setUserInputDetails,
}: StepperProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;



    setUserInputDetails((prevState) => ({
      ...prevState,
      payment: {
        ...prevState.payment,
        [name]: value,
      },
    }));
  };

  return (
    <div className="flex flex-col gap-3">
      <h3
        className="uppercase py-2 px-4  font-semibold 
     "
      >
        Payment Details
      </h3>
      <div className="flex flex-col gap-3">
        <div className="w-full flex border rounded-lg">
          <input
            className=" p-2 outline-none"
            type="text"
            placeholder="CARD NUMBER"
            name="cardNumber"
            value={userInputDetails.payment.cardNumber}
            onChange={handleInputChange}
          />
          <img src={card} alt="" width={45} />
        </div>
        <input
          className="w-full p-2 border outline-none rounded-lg"
          type="text"
          name="cardHolderName"
          placeholder="CARDHOLDER NAME"
          onChange={handleInputChange}
          value={userInputDetails.payment.cardHolderName}
        />
        <div className="flex flex-nowrap gap-4">
          <div className="border rounded-lg w-24">
            <input
              className=" w-20 outline-none p-2"
              type="text"
              name="month"
              placeholder="12"
              onChange={handleInputChange}
              value={userInputDetails.payment.month}
            />
          </div>
          <div className="border rounded-lg w-24">
            <input
              className=" p-2 outline-none  w-20"
              type="text"
              placeholder="2028"
              name="year"
              onChange={handleInputChange}
              value={userInputDetails.payment.year}
            />
          </div>

          <div className="border flex rounded-lg w-24">
            <input
              className=" p-2 outline-none w-[52px] "
              type="text"
              placeholder="CVV"
              name="cvv"
              onChange={handleInputChange}
              value={userInputDetails.payment.cvv}
            />
            <img src={cardCvv} alt="" width={35} />
          </div>
        </div>
      </div>
    </div>
  );
};
