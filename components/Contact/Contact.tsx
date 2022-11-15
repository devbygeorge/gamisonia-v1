import s from "./Contact.module.scss";
import React, { useState } from "react";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    reason: "0",
    phone: "",
    order: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValues({
      name: "",
      email: "",
      reason: "0",
      phone: "",
      order: "",
      message: "",
    });
  };

  return (
    <div id="contact" className={s.contact}>
      <h2 className="section-heading">contact</h2>
      <div className="container">
        <div className={s.content}>
          <p className={s.info}>
            For immediate assistance during business hours, Monday through
            Friday 9am-7pm PT, please call +1-855-295-3559.
          </p>
          <form className={s.form} onSubmit={handleSubmit}>
            <input
              className={s.field}
              type="text"
              placeholder="First And Last Name*"
              required
              value={values.name}
              onChange={(e) =>
                setValues((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
            <input
              className={s.field}
              type="text"
              placeholder="Email*"
              required
              value={values.email}
              onChange={(e) =>
                setValues((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
            <select
              style={{ cursor: "pointer" }}
              className={s.field}
              value={values.reason}
              onChange={(e) =>
                setValues((prevState) => ({
                  ...prevState,
                  reason: e.target.value,
                }))
              }
            >
              <option value="0" disabled>
                Reason for Contact
              </option>
              <option value="1">Reason One</option>
              <option value="2">Reason Two</option>
              <option value="3">Other</option>
            </select>
            <input
              className={s.field}
              type="text"
              placeholder="Phone"
              value={values.phone}
              onChange={(e) =>
                setValues((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
            />
            <input
              className={s.field}
              type="text"
              placeholder="Order Number"
              value={values.order}
              onChange={(e) =>
                setValues((prevState) => ({
                  ...prevState,
                  order: e.target.value,
                }))
              }
            />
            <textarea
              className={s.field}
              rows={1}
              placeholder="Message"
              value={values.message}
              onChange={(e) =>
                setValues((prevState) => ({
                  ...prevState,
                  message: e.target.value,
                }))
              }
            ></textarea>
            <button className={s.submit} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
