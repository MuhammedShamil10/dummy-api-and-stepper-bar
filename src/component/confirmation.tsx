import { StepperProps } from "../type";

export const Confirmation = ({userInputDetails}:StepperProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h3
        className="uppercase py-2 px-4  font-semibold 
     "
      >
        Please confirm given details
      </h3>
      <div className="flex flex-col items-start gap-1">
        <h2 className="font-serif">Name: {userInputDetails.name}</h2>
        <h2 className="font-serif">Number: {userInputDetails.number}</h2>
        <h2 className="font-serif">Address One: {userInputDetails.addressOne}</h2>
        <h2 className="font-serif">Address Two: {userInputDetails.addressTwo}</h2>
        <h2 className="font-serif">Category: {userInputDetails.category.join(' *')}</h2>
        <h2 className="font-serif">Card Holder Name: {userInputDetails.payment.cardHolderName}</h2>
        <h2 className="font-serif">Card Number: {userInputDetails.payment.cardNumber}</h2>
        <h2 className="font-serif">Month: {userInputDetails.payment.month}</h2>
        <h2 className="font-serif">Year: {userInputDetails.payment.year}</h2>
        <h2 className="font-serif">CVV: {userInputDetails.payment.cvv}</h2>
      </div>
    </div>
  );
};
