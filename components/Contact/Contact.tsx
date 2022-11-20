import s from "./Contact.module.scss";
import React, { useState } from "react";

export default function Contact({ pageInfo }: any) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValues({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div id="contact" className={s.contact}>
      <h2 className="section-heading">contact</h2>
      <div className="container">
        <div className={s.content}>
          <p className={s.info}>{pageInfo?.contactText}</p>
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
              type="email"
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
            <input
              className={s.field}
              type="tel"
              pattern="[+]?[0-9]+"
              placeholder="Phone"
              value={values.phone}
              onChange={(e) =>
                setValues((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
            />
            <textarea
              className={s.field}
              rows={6}
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
