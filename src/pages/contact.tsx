import { useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { FormData } from "@/types/component-types";

const Contact: React.FC = () => {
  useEffect(() => {
    flatpickr("#floating_date", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });
  }, []);

  return (
    <section className="flex justify-center min-h-screen w-full p-6">
      <div className="w-3/4">
        <form
          action="https://api.web3forms.com/submit"
          encType="multipart/form-data"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="755d948f-86c6-4a71-a3a7-beb325a0b965"
          />
          <div className="relative z-0 w-full mb-5 my-8 group">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
              type="text"
              name="floating_name"
              placeholder=" "
              required
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
              type="email"
              name="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
              placeholder=" "
              required
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
              type="tel"
              name="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 my-8 group">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
              type="text"
              id="floating_date"
              name="floating_date"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_date"
              className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date & Time
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 my-8 mt-16">
            <textarea
              rows={4}
              className="block rounded-sm py-2.5 px-2 w-full text-xs text-gray-900 bg-transparent border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-300 peer"
              placeholder="Please include as many details as possible"
              name="floating_message"
              required
            ></textarea>
            <label
              htmlFor="floating_message"
              className="peer-focus:font-medium absolute text-[0.7rem] text-gray-900  duration-300 transform -translate-y-6 scale-75 bottom-24 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-pink-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          {/* <div className="relative z-0 w-full mb-5 mt-10 group">
            <label
              className="block mb-2 text-sm peer-focus:font-medium text-gray-900"
              htmlFor="dropzone_file"
            >
              Upload Inspo
            </label>
            <label
              htmlFor="dropzone_file"
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
              <input
                id="dropzone_file"
                type="file"
                className="hidden"
                name="dropzone_file"
              />
            </label>
          </div> */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-7 justify-center text-white font-bold tracking-widest bg-pink-200 px-96 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center border-double border-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
