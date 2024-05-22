"use client";
import { EmailJSResponseStatus } from "@emailjs/browser";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const sendEmail = (params) => {
    
EmailJSResponseStatus
    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, params, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
          throttle: 5000 // you can not send more than one email per second
        }
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
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
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: true })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:right-2 focus:ring-accent/50 custom-bg"
      />
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:right-2 focus:ring-accent/50 custom-bg"
      />
      <textarea placeholder="Message"
        {...register("message", { required: true, max: 256, min: 45 })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:right-2 focus:ring-accent/50 custom-bg"
      />

      <input value='Let me give your torch light' className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:right-2 focus:ring-accent/50 cursor-pointer capitalize" type="submit" />
    </form>
  );
}
