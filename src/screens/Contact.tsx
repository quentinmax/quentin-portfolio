import React, { useRef, useState } from "react";
import ContactInput from "../components/Contact/ContactInput";
import AnimatedLink from "../components/AnimatedLink";
import MagicText from "../components/Contact/MagicText";
import CTAButton from "../components/CTAButton";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit: SubmitHandler<FormFields> = async (data, event) => {
    event?.preventDefault();
    event?.stopPropagation();

    try {
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "An error occured, try again later.",
      });
    }

    console.log(data);
  };

  return (
    <div className="contact-wrapper">
      <h2>Transform Ideas into Reality - Get in Touch</h2>
      <div className="contact-grid">
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit, (err) => console.error(err))}
        >
          <ContactInput
            register={register("name", { required: "Name is required." })}
            index={1}
            required
            title="Your name"
            placeholder="John Doe"
            value={useWatch({ control, name: "name", defaultValue: "" })}
            error={errors.name?.message}
          />
          <ContactInput
            register={register("email", { required: "Email is required." })}
            index={2}
            required
            title="Your email"
            placeholder="example@mail.com"
            type="email"
            value={useWatch({ control, name: "email", defaultValue: "" })}
            error={errors.email?.message}
          />
          <ContactInput
            register={register("message", { required: "Message is required." })}
            index={3}
            required
            title="Your message"
            placeholder="Hello Quentin, ..."
            useTextarea
            value={useWatch({ control, name: "message", defaultValue: "" })}
            error={errors.message?.message}
          />
          <CTAButton
            type="submit"
            action={() => {}}
            title="Send"
            style="light"
          />
        </form>
        <div className="contact-info">
          <div>
            <h4>Contact Details</h4>
            <AnimatedLink
              href="mailto:quentinhoehne.dev@gmail.com"
              title="quentinhoehne.dev@gmail.com"
            />
            <MagicText />
          </div>
          <div>
            <h4>Socials</h4>
            <AnimatedLink href="https://github.com/quentinmax" title="Github" />
            <AnimatedLink
              href="https://instagram.com/itz.quentin_"
              title="Instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
