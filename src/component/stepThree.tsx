import React, { useId, useState } from "react";
import { Dropdown, Checkbox, Label } from "flowbite-react";
import { checkboxItems } from "../container/constant/stepperItems";
import { StepperProps } from "../type";

export const StepThree = ({
  userInputDetails,
  setUserInputDetails,
}: StepperProps) => {
  const [price, setPrice] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInputDetails((prev) => {
      const category = prev.category;
      if (category.includes(value)) {
        console.log(category, "catt");

        // value.includes("gayroscope") ? setPrice(400) : setPrice(1200);
        category.includes("gayroscope")
          ? setPrice(400)
          : setPrice(0)
        return {
          ...prev,
          category: category.filter((item) => item !== value),
        };
      } else {
        console.log("else", value);

        value.includes("gayroscope" && "lesbionishdish")
          ? setPrice(1600)
          : value === "gayroscope"
          ? setPrice(400)
          : setPrice(1200);
        return { ...prev, category: [...category, value] };
      }
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="uppercase py-2 px-4 font-semibold">Pick Items</h3>
      <Dropdown
        label="Stock items"
        inline
        style={{ border: "solid", backgroundColor: "red" }}
      >
        {checkboxItems.map((item, index) => (
          <Dropdown.Item key={index}>
            <Checkbox
              value={item}
              checked={userInputDetails.category.includes(item)}
              onChange={handleInputChange}
              id={item}
            />
            <Label className="flex items-center pl-2" htmlFor={item}>
              {item}
            </Label>
          </Dropdown.Item>
        ))}
      </Dropdown>
      {price === 0 ? null : <div>Selected Item Price:{price}</div>}
    </div>
  );
};
