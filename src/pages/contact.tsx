import React from "react";

const Contact: React.FC = () => {
  return (
    <section>
      <form
        name="contact"
        action="/success"
        method="POST"
        data-netlify="true"
      ></form>
    </section>
  );
};
export default Contact;
