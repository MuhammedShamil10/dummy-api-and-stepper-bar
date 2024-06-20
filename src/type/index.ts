export type StepperProps = {
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
    userInputDetails: {
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
    };
  };