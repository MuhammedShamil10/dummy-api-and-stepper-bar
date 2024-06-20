export const steps = [
  "Details",
  "Address",
  "Select Category",
  "Payment",
  "confirmation",
];

type ExtractSurname<T extends string> =
  T extends `${infer Firstname} ${infer Surname}` ? Surname : null;

export const checkboxItems = ["gayroscope", "lesbionishdish"];
export type Surname = ExtractSurname<(typeof checkboxItems)[number]>;
