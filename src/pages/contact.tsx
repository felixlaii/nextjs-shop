import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="flex justify-center min-h-screen p-6">
      {" "}
      <div>
        <form
          name="contact"
          action="/success"
          method="POST"
          data-netlify="true"
          className="flex flex-col"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex-row">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="John/Jane Doe"
              required
            />
          </div>
          <div className="flex-row">
            <label className="">Email:</label>
            <input
              placeholder="john/jane@email.com"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="flex-row">
            <label>Phone:</label>
            <input
              placeholder="phone number"
              type="tel"
              name="phone"
              required
            />
          </div>
          <label>Requested Pick Up Date & Time:</label>
          <div className="flex-row">
            <input
              placeholder="date & time"
              type="datetime-local"
              name="pickup"
              required
            />
          </div>
          <div className="flex-row">
            <label>Message:</label>
            <textarea
              placeholder="please include as many details as possible (theme/occasion, quantity, flavours and colours etc)"
              name="message"
              required
            ></textarea>
          </div>
          <div className="flex-row">
            <label>File Attachment:</label>
            <input type="file" name="file" id="file" required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
