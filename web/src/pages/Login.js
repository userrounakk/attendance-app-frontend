import React, { useState } from 'react'
import Button from '../Components/Button'
import logo from '../logo.svg'
function Login () {
  const [formData, setFormData] = useState({
    name: '',
    phno: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='font-sans absolute h-full w-full max-h-[800px] max-w-[500px] bg  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-10 flex flex-col'>
      <div className='flex items-center my-10'>
        <img src={logo} alt='' className='w-14 mr-5' />
        <p className='text-primary text-5xl ml font-sans'>Nock</p>
      </div>
      <div className=' my-10'>
        <p className='text-[2rem] font-thin leading-10'>
          Hey, <br /> Login Now
        </p>
        <p className='text-[1rem] my-5'>
          If you are new ask your{' '}
          <span className='text-primary'>
            club seniors about <span className=' font-bold'>Nock</span> access
          </span>
        </p>
        <form className=' mt-5 flex flex-col'>
          <input
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value })
            }}
            type='text'
            placeholder='Name'
            className='p-5 rounded-md bg-secondary my-3'
          />
          <input
            value={formData.phno}
            onChange={(e) => {
              setFormData({ ...formData, phno: e.target.value })
            }}
            type='text'
            placeholder='Phone Number'
            className='p-5 rounded-md bg-secondary my-3'
          />
          <Button
            onClick={handleSubmit}
            type='submit'
            className='mx-0 w-full'
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
