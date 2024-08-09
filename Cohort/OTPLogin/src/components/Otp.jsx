import React, { useState } from "react";

const Otp = ({ setSubmitOtp, setNotificationVisible }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const updateOtp = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (newOtp.every((val) => val !== "")) {
      setSubmitOtp(newOtp.join(""));
      setNotificationVisible(true);
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^[0-9]$/.test(value)) {
      updateOtp(value, index);

      if (index < otp.length - 1) {
        e.target.nextSibling.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index >= 0) {
      updateOtp("", index);

      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
    if (e.target.value != "" && /^[0-9]$/.test(parseInt(e.key))) {
      updateOtp(parseInt(e.key), index + 1);
      if (index < otp.length - 1) {
        e.target.nextSibling.focus();
      }
    }
  };

  return (
    <div className="w-3/12 rounded-lg bg-[#303030] p-3 items-center flex flex-col">
      <h3 className="text-center font-bold text-2xl py-5">Login Via OTP</h3>
      <div className="flex items-center justify-between gap-4">
        {otp.map((value, index) => (
          <input
            key={index}
            className="text-black p-2 w-12 h-12 border border-gray-300 rounded text-center"
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            autoFocus={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Otp;
