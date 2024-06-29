import { useEffect, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { FormInquiry } from "@/types/form-types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Contact: React.FC<FormInquiry> = ({
  floating_name,
  floating_email,
  floating_phone,
  floating_date,
  floating_message,
  floating_qty,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    flatpickr("#floating_date", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });
  }, []);

  const { register, handleSubmit } = useForm<FormInquiry>();

  const sendMail: SubmitHandler<FormInquiry> = async (data) => {
    try {
      const response = await fetch("/api/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true); // Update state to show success message
        router.push("/success"); // Redirect to success page if needed
      } else {
        const errorData = await response.json();
        console.error("Failed to submit the form", errorData);
        setIsError(true); // Update state to show error message
      }
    } catch (error) {
      console.error("Failed to submit the form", error);
      setIsError(true); // Update state to show error message
    }
  };

  return (
    <section className="flex justify-center w-full p-6">
      <div className="w-3/4">
        <form onSubmit={handleSubmit(sendMail)}>
          <input type="hidden" />
          <input type="hidden" />
          <div className="relative z-0 w-full mb-5 my-8 group">
            <input
              {...register("floating_name", { required: true })}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
              type="text"
              name="floating_name"
              placeholder=" "
              id="floating_name"
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 my-8 group">
            <input
              {...register("floating_email", { required: true })}
              type="email"
              name="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
              placeholder=" "
              id="floating_email"
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 my-8 group">
            <input
              {...register("floating_phone", { required: true })}
              type="tel"
              name="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
              placeholder=" "
              id="floating_phone"
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 my-8 group flex space-x-4">
            <div className="w-1/2">
              <input
                {...register("floating_date", { required: true })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
                type="text"
                id="floating_date"
                name="floating_date"
                placeholder=" "
              />
              <label
                htmlFor="floating_date"
                className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date & Time Needed
              </label>
            </div>
            <div className="w-1/2">
              <input
                {...register("floating_qty", { required: true })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
                type="number"
                id="floating_qty"
                name="floating_qty"
                placeholder=" "
              />
              <label
                htmlFor="floating_qty"
                className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Quantity
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 my-8 mt-16">
            <textarea
              {...register("floating_message", { required: true })}
              rows={4}
              className="block rounded-sm py-2.5 px-2 w-full text-xs text-gray-900 bg-transparent border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
              placeholder="Please include as many details as possible (inspo etc.)"
              name="floating_message"
              id="floating_message"
            ></textarea>
            <label
              htmlFor="floating_message"
              className="peer-focus:font-medium absolute text-[0.7rem] text-gray-900 duration-300 transform -translate-y-6 scale-75 bottom-24 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-7 justify-center text-white font-bold tracking-widest bg-pink-200 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center border-double border-4"
            >
              Submit
            </button>
          </div>
        </form>
        {isSubmitted && (
          <p className="text-center text-xl font-extralight pt-20">
            Your submission has been successfully received!
          </p>
        )}
        {isError && (
          <p className="text-center text-xl font-normal pt-20 text-red-600">
            An error occurred please contact me
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
