"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form  onSubmit={handleSubmit(onSubmit)}
     className="max-w-md w-full flex flex-col items-center justify-center space-y-4">
      <input type="text" placeholder="Name" {...register("Name", {required: true})} />
      <input type="email" placeholder="email" {...register("email", {required: true})} />
      <textarea {...register("message", {required: true, max: 256, min: 45})} />

      <input type="submit" />
    </form>
  );
}