import s from "./Contact.module.scss";
import React, { useState } from "react";
import { Translations, PageInfo } from "typings";

type Props = {
  pageInfo: PageInfo;
  translations: Translations;
};

export default function Contact({ pageInfo, translations }: Props) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showSuccessResponse, setShowSuccessResponse] = useState(false);
  const [showFailureResponse, setShowFailureResponse] = useState(false);
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear input values
    setValues({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setSubmitDisabled(true);

    // Send data to backend
    const res = await fetch("/api/mail", {
      method: "post",
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      }),
    });

    // Show correct responses
    if (res.status === 200) {
      setShowSuccessResponse(true);

      setTimeout(() => {
        setShowSuccessResponse(false);
        setSubmitDisabled(false);
      }, 2000);
    } else {
      setShowFailureResponse(true);

      setTimeout(() => {
        setShowFailureResponse(false);
        setSubmitDisabled(false);
      }, 2000);
    }
  };

  return (
    <div id="contact" className={s.contact}>
      <h2 className="section-heading">{translations.contact}</h2>
      <div className="container">
        <div className={s.content}>
          <p className={s.info}>{pageInfo?.contactText}</p>
          <form className={s.form} onSubmit={handleSubmit}>
            <input
              className={s.field}
              type="text"
              placeholder={translations.name}
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
              placeholder={translations.email}
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
              placeholder={translations.phone}
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
              placeholder={translations.message}
              required
              value={values.message}
              onChange={(e) =>
                setValues((prevState) => ({
                  ...prevState,
                  message: e.target.value,
                }))
              }
            ></textarea>
            <p
              className={`${s.response} ${
                showSuccessResponse ? s.showResponse : ""
              }`}
            >
              Message sent successfully..
            </p>
            <p
              className={`${s.response} ${
                showFailureResponse ? s.showResponse : ""
              }`}
            >
              Message sent failed..
            </p>
            <button
              className={`${s.submit} ${
                isSubmitDisabled ? s.submitDisabled : ""
              }`}
              type="submit"
            >
              {translations.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
