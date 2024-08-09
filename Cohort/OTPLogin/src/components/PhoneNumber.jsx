import React, { useState } from "react";

const PhoneNumber = ({ setNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handlePhoneNumberSubmit = () => {
    if (!enteredNumber) {
      alert("Enter the number");
      return;
    }
    setNumber(enteredNumber);
  };

  return (
    <div className="w-3/12 rounded-lg bg-[#303030] p-3 items-center flex flex-col">
      <h3 className="text-center font-bold text-2xl py-5">Login Via OTP</h3>

      <input
        type="text"
        name="phoneNumber"
        value={enteredNumber}
        onChange={(e) => setEnteredNumber(e.target.value)}
        placeholder="Enter your phone number"
        className="w-9/12 h-8 px-3 py-2 text-black rounded-md my-8"
      />

      <button
        className="px-7 py-2 font-bold rounded border border-white hover:bg-green-600 my-4"
        onClick={handlePhoneNumberSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default PhoneNumber;
