import { useEffect, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import React from "react";
import { useForm } from "react-hook-form";

const Contact: React.FC = () => {
  const {
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    flatpickr("#floating_date", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1cb6b004-83a5-43cc-bc99-532166bdd369",
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          date: e.target.date.value,
          quantity: e.target.quantity.value,
          message: e.target.message.value,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        console.log(result);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  }
  return (
    <section className="flex justify-center w-full p-6">
      <div className="w-3/4">
        {!isSubmitted && !isError && (
          <form onSubmit={handleSubmit}>
            {/* <input
            type="hidden"
            name="access_key"
            value="755d948f-86c6-4a71-a3a7-beb325a0b965"
          /> */}
            {/* <input
            type="hidden"
            name="redirect"
            value="http://localhost:3000/success"
          ></input> */}
            <div className="relative z-0 w-full mb-5 my-8 group">
              <input
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
                type="text"
                name="name"
                required
                placeholder=" "
                // {...register("name", { required: true })}
              />
              {errors.name && <span>Name is required</span>}

              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 my-8 group">
              <input
                type="email"
                name="email"
                required
                // {...register("email", { required: true })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
                placeholder=" "
              />
              {errors.name && <span>Email is required</span>}

              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 my-8 group">
              <input
                type="tel"
                name="phone"
                required
                // {...register("phone", { required: false })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone Number
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 my-8 group flex space-x-4">
              <div className="w-1/2">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
                  type="text"
                  id="floating_date"
                  name="date"
                  required
                  // {...register("date", { required: true })}
                  placeholder=" "
                />
                {errors.name && <span>Date and Time is required</span>}

                <label
                  htmlFor="Date and Time"
                  className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Date & Time Needed
                </label>
              </div>
              <div className="w-1/2">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
                  type="number"
                  name="quantity"
                  // {...register("quantity", { required: false })}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="quantity"
                  className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:right-auto peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Quantity
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-5 my-8 mt-16">
              <textarea
                rows={4}
                className="block rounded-sm py-2.5 px-2 w-full text-xs text-gray-900 bg-transparent border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
                placeholder="Please include as many details as possible (inspo etc.)"
                name="message"
                // {...register("message", { required: true })}
              ></textarea>
              {errors.name && <span>Details are required</span>}

              <label
                htmlFor="message"
                className="peer-focus:font-medium absolute text-sm text-gray-900  duration-300 transform -translate-y-6 scale-75 bottom-24 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            {/* <div className="relative z-0 w-full mb-5 mt-10 group">
            <label
              className="block mb-2 text-sm peer-focus:font-medium text-gray-900"
              htmlFor="file"
            >
              Upload Inspo
            </label>
            <label
              htmlFor="file"
              className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-900">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-900">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input type="file" {...register("file")} />
            </label>
          </div> */}
            <div className="flex justify-center">
              {/* <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            /> */}
              <button
                type="submit"
                className="mt-7 justify-center text-white font-bold tracking-widest bg-pink-300 px-96 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center border-double border-4"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {isSubmitted && (
          <p className="text-center text-xl font-extralight pt-20">
            Your submission has been successfully received!
          </p>
        )}
        {isError && (
          <p className="text-center text-xl font-normal pt-20 text-red-600">
            An error occurred please contact the office to sign up as a new
            patient.
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
