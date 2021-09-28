import React, { useState } from 'react'
import axios from 'axios';
import Button from 'aws-northstar/components/Button';
import Inline from 'aws-northstar/layouts/Inline';
import Container from 'aws-northstar/layouts/Container';
import FormField from 'aws-northstar/components/FormField'
import Box from 'aws-northstar/layouts/Box';
import Input from 'aws-northstar/components/Input';
import OTPInput, { ResendOTP } from "otp-input-react"
 
const renderButton = buttonProps => {
    return (
        <button {...buttonProps}>
          {buttonProps.remainingTime !== 0
            ? `Please wait for ${buttonProps.remainingTime} sec`
            : "Voice authentication"}
        </button>
      );
  };

const renderTime = remainingTime => {
return <span>{remainingTime} seconds remaining</span>;
};

const OtpPage = () => {

    const [OTP, setOTP] = useState("");
    const [code, setCode] = useState("");
    const [destPhone, setDestPhone] = useState('');

    const min = 1;
    const max = 9999;
    const rand =  String(Math.floor(Math.random()*(max-min+1)+min))

    const destPhoneAssignment = () => {
        console.log('Phone number', destPhone)
        console.log('OTP Token', OTP)
        setCode(rand)
    }

    const voiceVerification = async () => {
        console.log("Call voiceVerification function")
        const apiUrl = 'https://zgtrxqiapk.execute-api.ap-southeast-1.amazonaws.com/dev'
        const resp = await axios.post(apiUrl,   {
            "preference": "CustomerFirst",
            "issue": code,
            "name": "vit",
            "phone": destPhone,
            "message": "test"
        })

        console.log(resp.data);
        //localStorage.setItem('myValueInLocalStorage', e.target.value)
    }

    const verifyCode =  () => {
        // console.log('Call OTP', OTP)
        // console.log('Call code', code)
        if(String(OTP) === code){
            alert("Authenticated")
        }else{
            alert("Authentication Failed")
        }
    }

    return (
        <>
        
            <Container headingVariant='h4' title='Voice verification demo'>
                <FormField
                    label="Destination Phone number"
                    controlId="destPhoneForm"
                    description="Please input destination phone number to receive voice verification"
                    hintText="Require in E164 format. e.g. +66xxxxxxxxx" 
                    >
                    <input type="text" onChange={e => setDestPhone(e.target.value)} />
                </FormField>
                <Inline>
                    <Button onClick={destPhoneAssignment}>Set</Button>
                </Inline>
            
            <h2>Verification</h2>

            <Box width='550px'>
                <div className="row">
                    <OTPInput
                        value={OTP}
                        onChange={setOTP}
                        autoFocus
                        OTPLength={4}
                        otpType="number"
                        disabled={false}
                        />

                    </div>
                    <div className="row" style={{ marginTop: 15 }}> 
                        
                        <ResendOTP renderButton={renderButton} renderTime={renderTime} onResendClick={voiceVerification} />
                        {/* <ResendOTP
                            renderTime={() => React.Fragment}
                            renderButton={buttonProps => {            
                            return (
                                <button {...buttonProps}  onResendClick={voiceVerification} >
                                    {
                                        buttonProps.remainingTime !== 0
                                        ? `Please wait for ${buttonProps.remainingTime} sec`
                                        : "Voice Authentication"
                                    }
                                </button>
                            );}}
                        />    */}
                        
                            <Button onClick={verifyCode}>Verify</Button>
                        
                    </div>
            </Box>
            </Container>
            
        </>
    )
}

export default OtpPage
