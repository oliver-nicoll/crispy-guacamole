import React from "react";

const SubscribeForm = ({ status, message, onValidated }) => {
  
  let email, name;

  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div className="app__newsletter-input flex__center">

      {status === "sending" && <div style={{ color: "var( --color-grey)" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "var( --color-golden)" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "var(--color-crimson" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <input
          ref={node => (name = node)}
          type="text"
          placeholder="Your name"
        />
      
        <input
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
  
        <button onClick={submit}>Submit</button>
    </div>
  );
};

export default SubscribeForm;

