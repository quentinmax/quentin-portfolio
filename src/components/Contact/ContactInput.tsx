import React from "react";

type Props = {
  required: boolean;
  title: string;
  index: number;
  placeholder: string;
  register: any;
  type?: React.HTMLInputTypeAttribute;
  useTextarea?: boolean;
  error?: string;
  value: string;
};

const ContactInput: React.FC<Props> = ({
  index,
  required,
  title,
  placeholder,
  type = "text",
  useTextarea,
  register,
  error,
  value,
}) => {
  return (
    <div className="contact-input-wrapper">
      <hr color="#1d1d1e" />
      <div className="contact-input-inner">
        <p>{index < 10 ? `0${index}` : index}</p>
        <div>
          <p className={`contact-input-title ${value && "with-value"}`}>
            {title}
            {required ? " *" : ""}
          </p>
          {useTextarea ? (
            <>
              <textarea {...register} placeholder={placeholder} />
              {error && <p className="error">{error}</p>}
            </>
          ) : (
            <>
              <input {...register} placeholder={placeholder} type={type} />
              {error && <p className="error">{error}</p>}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInput;
