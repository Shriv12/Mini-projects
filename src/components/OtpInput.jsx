import { useEffect, useRef, useState } from "react";

const initialFields = () => Array(4).fill("");

function OtpInput({ length = 4, onOtpSubmit }) {
  const [otp, setOtp] = useState(initialFields());
  console.log('otp', otp);
  

  const inputRefs = useRef([]);

  const onHandleChange = (index, e) => {
    const value = e.target.value;
    console.log('index', index);
    console.log('value', value);
    
    if (isNaN(value)) return;
    
    // allow only one input
    const newOtp = [...otp];
    console.log('newOtp', newOtp);
    newOtp[index] = value.substr(value.length - 1);
    setOtp(newOtp);

    // trigger submit
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      console.log(combinedOtp);
      onOtpSubmit(combinedOtp);
    }

    // move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  const onHandleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1)
  };
  const onHandleKeyDown = (index, e) => {
    if(e.key==="Backspace" && index > 0 && !otp[index] && inputRefs.current[index - 1]){
        // Move focus to the previous input field on backspace
        inputRefs.current[index - 1].focus()
    }
  };

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus(); 
    }
  }, []);

  return (
    <div className="otp-input-wrapper">
      {otp.map((value, index) => {
        return (
          <input
            ref={(input) => (inputRefs.current[index] = input)}
            key={index}
            type="text"
            value={value}
            onChange={(event) => onHandleChange(index, event)}
            onClick={() => onHandleClick(index)}
            onKeyDown={(event) => onHandleKeyDown(index, event)}
            className="otp-input"
          />
        );
      })}
    </div>
  );
}

export default OtpInput