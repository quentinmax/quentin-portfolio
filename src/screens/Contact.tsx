import React, { useState } from "react";
import ContactInput from "../components/Contact/ContactInput";
import AnimatedLink from "../components/AnimatedLink";
import MagicText from "../components/Contact/MagicText";
import CTAButton from "../components/CTAButton";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact-wrapper">
      <h2>Transform Ideas into Reality - Get in Touch</h2>
      <div className="contact-grid">
        <form>
          <ContactInput
            index={1}
            onChangeText={(e) => setName(e.target.value)}
            required
            title="Your name"
            value={name}
            placeholder="John Doe"
          />
          <ContactInput
            index={2}
            onChangeText={(e) => setEmail(e.target.value)}
            required
            title="Your email"
            value={email}
            placeholder="example@mail.com"
            type="email"
          />
          <ContactInput
            index={3}
            onChangeText={(e) => setMessage(e.target.value)}
            required
            title="Your message"
            value={message}
            placeholder="Hello Quentin, ..."
            useTextarea
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
      <CTAButton action={() => {}} title="Send" style="light" />
    </div>
  );
};

export default Contact;
