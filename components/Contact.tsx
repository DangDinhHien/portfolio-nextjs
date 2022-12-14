import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ddhien98@gmail.com?subject=${formData.subject}&body=Hi, myname is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-6 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-4 md:space-y-4 md:mt-0">
        <h4 className="text-xl md:text-3xl font-semibold md:text-center">
          I have got just what you need.{" "}
        </h4>
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#f7ab0a] w-5 md:w-7 h-5 md:h-7 animate-pulse" />
          <p className="text-base md:text-2xl">ddhien98@gmail.com</p>
        </div>
        {/* <div className="flex items-center space-x-5 md:justify-center">
          <MapPinIcon className="text-[#f7ab0a] w-5 md:w-7 h-5 md:h-7 animate-pulse" />
          <p className="text-base md:text-2xl">Ho Chi Minh, Viet Nam</p>
        </div> */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="md:flex md:space-x-2">
            <input
              {...register("name")}
              className="contactInput w-full md:w-auto mb-2 md:mb-0"
              placeholder="Name"
              type="text"
            />
            <input
              {...register("email")}
              className="contactInput w-full md:w-auto"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
