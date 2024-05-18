import React from "react";

const Contact: React.FC = () => {
  return (
    <section>
      <form name="contact" action="/success" method="POST" data-netlify="true">
        <div>
          <h2>Lets Talk ...</h2>
        </div>
      </form>
    </section>
  );
};
export default Contact;
