import React, { useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const Contact: React.FC = () => {
  useEffect(() => {
    flatpickr("#pickup", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });
  }, []);
  return (
    <section className="flex justify-center min-h-screen p-6">
      {" "}
      <div>
        <form
          name="contact"
          action="/success"
          className="flex flex-col max-w-md mx-auto"
          method="POST"
        >
          {/* <input type="hidden" name="form-name" value="contact" /> */}
          <div className="flex flex-col relative z-0 w-full mb-5 group">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              name="floating_name"
              placeholder=" "
              id="floating_name"
              required
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="flex flex-col mb-4">
            <label>Phone</label>
            <input
              className="border-b"
              placeholder="phone number"
              type="tel"
              name="phone"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Date & Time</label>
            <input
              id="pickup"
              className="p-2 border border-gray-300 rounded"
              type="text"
              name="pickup"
              placeholder="date & time"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Message</label>
            <textarea
              className="border px-2"
              placeholder="please include as many details as possible (theme/occasion, quantity, flavours and colours etc)"
              name="message"
              required
            ></textarea>
          </div>
          {/* <div className="flex mb-4">
            <div className="flex flex-col mb-4">
              <label>Inspo</label>
              <input type="file" name="file" id="file" />
            </div>
          </div> */}

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
