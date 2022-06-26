// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="contact">
      <div className="image">
        <img src={props.data.photo} alt="kucing" />
      </div>
      <div className="text">
        <p>{props.data.name}</p>
        <p>{props.data.phone}</p>
        <p>{props.data.email}</p>
      </div>
    </div>
  );
};

export default Contact;
