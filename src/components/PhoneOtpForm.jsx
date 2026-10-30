import { useState } from 'react';
import OtpInput from './OtpInput';

function PhoneOtpForm() {
  const [otpValue, setOtpValue] = useState("1212")
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);
  // const handlePhoneNumber = (event) => {
  //   setPhoneNumber(event.target.value);
  // };
  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // phone validations
    const regex = /[^0-9]/g;

    if (phoneNumber.length < 10 || phoneNumber.length > 10 || regex.test(phoneNumber)) {
      alert("Invalid phone number");
      return;
    }
    console.log(phoneNumber, 'phoneNumber');
    
    setShowOTPInput(true);
  };
  const onOtpSubmit = (otp) => {
    console.log(typeof(otp));
    if(otpValue === otp){

        console.log("Login successfull", otp);
    }
    
  }
  return (
    <div>
      {!showOTPInput ? (
        <form onSubmit={handlePhoneSubmit} className="otp-form">
          <input
            type="text"
            value={phoneNumber}
            maxLength="10"
            onChange={() => setPhoneNumber(event.target.value)}
            placeholder="Enter phone number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="otp-wrapper">
            <p>OTP sent to <span className="ph-number">{phoneNumber}</span></p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
      )}
    </div>
  );
}

export default PhoneOtpForm