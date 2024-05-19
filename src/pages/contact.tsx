import React from "react";

const Contact: React.FC = () => {
  return (
    <section>
      <form
        className="flex flex-column"
        name="contact"
        action="/success"
        method="POST"
        data-netlify="true"
        encType="multipart/form-data"
      >
        <div>
          <h2>Lets Talk ...</h2>
        </div>
        <input type="hidden" name="form-name" value="contact" />
        <label>Name:</label>
        <input type="text" name="name" placeholder="John/Jane Doe" required />
        <label>Email:</label>
        <input
          placeholder="john/jane@email.com"
          type="email"
          name="email"
          required
        />
        <label>Phone:</label>
        <input placeholder="phone number" type="tel" name="phone" required />
        <label>Requested Pick Up Date & Time:</label>
        <input
          placeholder="date & time"
          type="datetime-local"
          name="pickup"
          required
        />
        <label>Message:</label>
        <textarea
          placeholder="please include as many details as possible (theme/occasion, quantity, flavours and colours etc)"
          name="message"
          required
        ></textarea>
        <label>File Attachment:</label>
        <input type="file" name="file" id="file" required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
