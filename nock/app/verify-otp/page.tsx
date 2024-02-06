'use client'
import React, { useState } from 'react'
import OtpInput from 'react-otp-input'
import BackButton from '../components/BackButton'
import Link from 'next/link'

export default function App () {
  const [otp, setOtp] = useState('')

  return (
    <div className='flex flex-col pt-12 px-8 h-[85vh]'>
      <BackButton />
      <div className='font-bold text-3xl mt-10 mb-4 '>OTP Verification</div>
      <p className='text-muted text-md'>
        Enter the verification code we just sent on your email address.
      </p>
      <div className='flex justify-between my-20'>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          shouldAutoFocus
          containerStyle={{ justifyContent: 'space-between' }}
          inputStyle={{ width: '20%', height: '70px' }}
          renderInput={(props, i) => {
            const { type, ...rest } = props
            return (
              <input
                {...rest}
                type='number'
                inputMode='numeric'
                autoComplete='one-time-code'
                className={`text-center text-lg rounded-md focus:border-0 border ${
                  otp[i]
                    ? 'border-theme-blue bg-white'
                    : 'border-[#E8ECF4] bg-[#F7F8F9]'
                }`}
              />
            )
          }}
        />
      </div>
      <button
        className='bg-theme-blue text-white py-4 px-16 rounded-lg w-[100%]'
        onClick={() => {}} // TODO: Add onClick handler
      >
        Verify
      </button>
      {/* Todo: Add resend link */}
      <Link href='' className='mt-auto text-center text-sm'>
        Didn’t received code? <span className='text-theme-blue'>Resend</span>
      </Link>
    </div>
  )
}
