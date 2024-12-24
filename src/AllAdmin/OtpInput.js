import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const OtpInput = () => {
  const [otp, setOtp] = useState(Array(4).fill("")); // State to hold OTP digits
  const [errorMessage, setErrorMessage] = useState(""); // State to manage error message
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Handle input change and move to the next input
  const handleChange = (e, index) => {
    const value = e.target.value;

    // Make sure the value is a single digit
    if (value.match(/[0-9]/) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value; // Update the OTP array at the given index
      setOtp(newOtp);

      // Move to next input if a value is entered
      if (index < otp.length - 1 && value) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // Handle backspace to clear the input and move to the previous input
  const handleBackspace = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = ""; // Clear the current input value
      setOtp(newOtp);

      // Move to the previous input if the current one is empty
      if (index > 0 && otp[index] === "") {
        document.getElementById(`otp-${index - 1}`).focus();
      }
    }
  };

  // Check OTP validity and navigate to the Dashboard
  const handleOtpSubmit = () => {
    if (otp.join("") === "1111") {
      navigate("/SuperAdmin/Zone"); // Redirect to Dashboard page
    } 
    else if (otp.join("") === "2222") {
      navigate("/ZoneAdmin/Dashboard"); // Redirect to Dashboard page
    }
    else if (otp.join("") === "3333") {
      navigate("/RangeAdmin/Dashboard"); // Redirect to Dashboard page
    }
    else if (otp.join("") === "4444") {
      navigate("/CRAdmin/Dashboard"); // Redirect to Dashboard page
    }
    else if (otp.join("") === "5555") {
      navigate("/DistrictAdmin/Dashboard"); // Redirect to Dashboard page
    }
    else if (otp.join("") === "6666") {
      navigate("/PoliceStationAdmin/Dashboard"); // Redirect to Dashboard page
    }
    else {
      setErrorMessage("Please enter a valid OTP"); // Set error message
    }
  };

  return (
    <div className="w-100 ">
      <form id="otp-form" className="otp-box">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            value={digit}
            maxLength="1"
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            autoFocus={index === 0}
            className="otp-input"
          />
        ))}
      </form>

      {/* Display error message if OTP is invalid */}
      {errorMessage && <p className="text-center error-msg">{errorMessage}</p>}

      <button className="form-control btn btn-login" onClick={handleOtpSubmit}>
        Submit OTP
      </button>
    </div>
  );
};

export default OtpInput;
