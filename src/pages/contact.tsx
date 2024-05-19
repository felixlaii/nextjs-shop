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
          name="fileForm"
          encType="multipart/form-data"
          action="/success"
          method="POST"
          data-netlify="true"
          className="flex flex-col"
        >
          <input type="hidden" name="fileForm" value="fileForm" />
          <div className="flex flex-col mb-4">
            <label className="">Name</label>
            <input
              className="border-b"
              type="text"
              name="name"
              placeholder="John/Jane Doe"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="">Email</label>
            <input
              className="border-b"
              placeholder="john/jane@email.com"
              type="email"
              name="email"
              required
            />
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
          <div className="flex mb-4">
            <div className="flex flex-col mb-4">
              <label>Inspo</label>
              <input type="file" name="file" id="file" />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
