"use client"
import Image from "next/image";
import bg from '../../../../public/background/contact-background.png'
import Form from "@/components/contact/form";


export default function Contact() {
  return (
    <>
     <Image src={bg} alt="background-image" className="-z-50 top-0 left-0 fixed w-full h-full object-cover object-center opacity-25"/>

     <article className="relative w-full flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Turn on the light
          </h1>
          <p className="text-center font-light">
            step into the circle of enchantment and weave your words into the fabrics of the cosmos. Whether you seek to conjure collaborations, unlock mystries or share the tales of adventures, your messages are treasured scrolls within this realm. Use the form below to send your missives through the ethereal of networks, and await the magic of response.
          </p>
      </div>
      <Form />
     </article>
     
    </>
  );
}
