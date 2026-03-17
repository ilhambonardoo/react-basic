import { useState } from "react";

const initialData = {
  name: "",
  message: "",
};
const ContactForm = () => {
  const [contact, setContact] = useState(initialData);

  function handleNameChange(e) {
    setContact({ ...contact, name: e.target.value });
  }

  function handleMessageChange(e) {
    setContact({ ...contact, message: e.target.value });
  }

  return (
    <>
      <div>
        <h1>Contact Form</h1>
        <form>
          <input
            type="text"
            placeholder="name"
            value={contact.name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="message"
            value={contact.message}
            onChange={handleMessageChange}
          />
        </form>
        <h1>Contact Detail</h1>
        <p>Name : {contact.name}</p>
        <p>Message : {contact.message}</p>
      </div>
    </>
  );
};

export default ContactForm;
