import React, { useState } from 'react';
import PhoneNumber from './components/PhoneNumber';
import Otp from './components/Otp';
import Notification from './components/Notification';

const App = () => {
  const [number, setNumber] = useState('');
  const [submitOtp, setSubmitOtp] = useState('');
  const[notificationVisible, setNotificationVisible] = useState(false);
  const correctOtp = '1234';

  return (
    <div className='w-screen h-screen bg-[#242424] text-white flex items-center justify-center'>
      {!submitOtp && (!number ? (
        <PhoneNumber setNumber={setNumber} />
      ) : (
        <Otp setSubmitOtp={setSubmitOtp} setNotificationVisible ={setNotificationVisible} />
      ))}
      
      {notificationVisible && (submitOtp === correctOtp ? (
        <Notification message="OTP verified successfully!" status={true} setVisibility={setNotificationVisible} />)
        : (<Notification message="OTP Incorrect!" status={false} setVisibility={setNotificationVisible} />))
      }
    </div>
  );
}

export default App;
