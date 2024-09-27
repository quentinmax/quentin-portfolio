import React from "react";

type Props = {
  required: boolean;
  title: string;
  index: number;
  onChangeText: (e: any) => void;
  value: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  useTextarea?: boolean;
};

const ContactInput: React.FC<Props> = ({
  index,
  onChangeText,
  required,
  title,
  value,
  placeholder,
  type = "text",
  useTextarea,
}) => {
  return (
    <div className="contact-input-wrapper">
      <hr color="#1d1d1e" />
      <div className="contact-input-inner">
        <p>{index < 10 ? `0${index}` : index}</p>
        <div>
          <p className="contact-input-title">
            {title}
            {required ? " *" : ""}
          </p>
          {useTextarea ? (
            <textarea
              onChange={onChangeText}
              value={value}
              placeholder={placeholder}
            />
          ) : (
            <input
              onChange={onChangeText}
              value={value}
              placeholder={placeholder}
              type={type}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInput;
