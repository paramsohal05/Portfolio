import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message

    }

    try{
      await axios.post('https://getform.io/f/azyyllkb',userInfo);
      toast.success("Your Message has been sent")
    }catch(error){
      toast.error("Something went Wrong")
    }
  }

  return (
    <>
    <div name='Contact' className='max-w-screen-2xl mx-auto container mt-16 px-4 md:px-20'>
        <div className='flex flex-col'>
          {/* Contact me Heading */}
          <div className=' font-bold text-3xl text-center mb-10 text-pink-800 font-serif'>
                <h1><span className='text-pink-950 text-5xl font-extrabold font-serif'>C</span>ontact <span className='text-pink-950 text-5xl font-extrabold font-serif'>M</span>e</h1>
                
            </div>
            <div className='flex flex-col md:flex-row items-center md:items-start'>
              <div className='max-w-screen-full md:w-1/2 mt-20 '>
                <ul className='space-y-4 '>
                  <li className='flex space-x-4 text-xl md:text-base font-serif list-disc'><SiGmail className='text-red-700 text-xl'/> <span>paramsohal05@gmail.com</span></li>
                  <li className='flex space-x-4 text-xl md:text-base font-serif list-disc'><FaWhatsapp  className='text-green-700 text-xl'/> <span>+91 969057****</span></li>
                  <li className='flex space-x-4 text-xl md:text-base font-serif list-disc'><MdCall  className='text-green-700 text-xl'/> <span>+91 969057****</span></li>
                </ul>
               </div>
              <div className='max-w-screen-full md:w-1/2 mt-8  w space-y-5 '>
                  <p>Please fill the form given below to contact me</p>
                  <form 
                  // action='https://getform.io/f/azyyllkb' 
                  // method="POST" 
                  className='bg-slate-200 shadow-xl rounded-xl py-1 ' 
                  onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center my-6 text-pink-950 text-xl font-semibold'>Send Your Message</h1>
                    <div className='flex flex-col mx-5  space-y-1'>
                      <label className='py-2 font-bold text-pink-950'>Name </label>
                      <span className='text-xs text-red-950'>required *</span>
                      
                      <input className='border-slate-400 rounded-lg hover:border-pink-900 border-2 py-2 px-2'
                      {...register("name", { required: true })}
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Name'/>
                      {errors.name && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col  mx-5 space-y-1'>
                      <label className='py-2 font-bold text-pink-950'>Email Address *</label>
                      <span className='text-xs text-red-950'>required *</span>
                      <input className='border-slate-400 rounded-lg hover:border-pink-900 border-2 py-2 px-2'
                      {...register("email", { required: true })}
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Email'
                      />
                      {errors.email && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col  mx-5 space-y-1'>
                      <label className='py-2 font-bold text-pink-950'>Message *</label>
                      <span className='text-xs text-red-950'>required *</span>
                      <textarea className='border-slate-400 rounded-lg hover:border-pink-900 border-2 py-2 px-2'
                      {...register("message", { required: true })}
                      type='text'
                      name='message'
                      id='message'
                      placeholder='Message'
                      
                      />
                      {errors.message && <span>This field is required</span>}

                    </div>

                    <button type="submit" className='bg-pink-950 text-slate-300 mt-3 mx-5 px-3 py-2 rounded-lg mb-3 hover:scale-110 duration-300 hover:rounded-none'>Send</button>
                    
                  </form>

              </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Contact