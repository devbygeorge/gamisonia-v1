import React, { useState } from "react";

import { PageInfo, Translations } from "typings";

import s from "./Contact.module.scss";

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
  const [isSuccessResponse, setSuccessResponse] = useState(false);
  const [isFailureResponse, setFailureResponse] = useState(false);
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* Clear input values */
    setValues({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setSubmitDisabled(true);

    /* Send data to backend */
    const res = await fetch("/api/mail", {
      method: "post",
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      }),
    });

    // Handle success and failure responses
    if (res.status === 200) {
      setSuccessResponse(true);

      setTimeout(() => {
        setSuccessResponse(false);
        setSubmitDisabled(false);
      }, 2000);
    } else {
      setFailureResponse(true);

      setTimeout(() => {
        setFailureResponse(false);
        setSubmitDisabled(false);
      }, 2000);
    }
  };

  const handleValueChange = (e: any, field: string) => {
    setValues((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  return (
    <div id="contact" className={s.contact}>
      <h2 className="section-title">{translations["contact"]}</h2>
      <div className={`container ${s.content}`}>
        {/* Contact text from database */}
        <p className={s.appeal}>{pageInfo["contactText"]}</p>
        {/* Contact Form */}
        <form className={s.form} onSubmit={handleSubmit}>
          {/* Name Field */}
          <input
            className={s.field}
            type="text"
            placeholder={translations["first_and_last_name"]}
            value={values["name"]}
            onChange={(e) => handleValueChange(e, "name")}
            required
          />
          {/* Email Field */}
          <input
            className={s.field}
            type="email"
            placeholder={translations["email"]}
            value={values["email"]}
            onChange={(e) => handleValueChange(e, "email")}
            required
          />
          {/* Phone Field */}
          <input
            className={s.field}
            type="tel"
            pattern="[+]?[0-9]+"
            placeholder={translations["phone"]}
            value={values["phone"]}
            onChange={(e) => handleValueChange(e, "phone")}
          />
          {/* Message Field */}
          <textarea
            className={s.field}
            rows={6}
            placeholder={translations["message"]}
            value={values.message}
            onChange={(e) => handleValueChange(e, "message")}
            required
          ></textarea>
          {/* Success and failure responses */}
          <p
            className={s.response}
            data-visible={isSuccessResponse ? true : false}
          >
            {translations["message_sent_successfully"]}
          </p>
          <p
            className={s.response}
            data-visible={isFailureResponse ? true : false}
          >
            {translations["failed_to_send_message"]}
          </p>
          {/* Submit Button */}
          <button
            type="submit"
            className={s.submit}
            data-disabled={isSubmitDisabled ? true : false}
          >
            {translations["submit"]}
          </button>
        </form>
      </div>
    </div>
  );
}
