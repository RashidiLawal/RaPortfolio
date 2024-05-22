"use client";

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const sendEmail = (params) => {

    const toastId = toast.loading("Sending message, please...")

    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, params, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
          throttle: 5000 // you can not send more than one email per second
        }
      })
      .then(
        () => {
          toast.success("I have received your message, i will get back to you soon!", {
            id: toastId,
          })
        },
        (error) => {
          // console.log('FAILED...', error.text);
          toast.error("An error occured sending your message. Please, try again!", {
            id: toastId,
          })
        },
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Rashidi",
      from_name: data.name,
      reply_to: data.email,
      message: data.message
    }
    sendEmail(templateParams)
  };

  return (
    <>
    <Toaster richColors={true} />
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: 'This field is required!', minLength: {
          value: 3,
          message: "Name should atleast be 3 characters long!"
        } })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:right-2 focus:ring-accent/50 custom-bg"
      />
      {errors.name && <span className="inline-block self-start text-accent">{errors.name.message}</span> }
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: 'This field is required!' })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:right-2 focus:ring-accent/50 custom-bg"
      />
      {errors.email && <span className="inline-block self-start text-accent">{errors.email.message}</span> }
      <textarea placeholder="Message"
        {...register("message", { required: 'This field is required!', maxLength: {
          value: 500,
          message: 'Message should be less than 500 characters'
        }, minLength: {
          value: 50,
          message: 'Message should be more than 50 characters'
        } })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:right-2 focus:ring-accent/50 custom-bg"
      />
      {errors.message && <span className="inline-block self-start text-accent">{errors.message.message}</span> }
      <input value='Let me give your torch light' className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:right-2 focus:ring-accent/50 cursor-pointer capitalize" type="submit" />
    </form>
    </>
  );
}
