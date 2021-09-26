import React from "react";

const ApiError = (props) => {
  const buttonTitle = props.buttonTitle || "";
  const hasButton = buttonTitle?.trim()?.length > 0;

  return (
    <section>
      <div className="error-container">
        <div>
          <p className="error-message">{props.error}</p>
        </div>
        {!hasButton || (
          <button className="btn" onClick={props.onClick}>
            {buttonTitle}
          </button>
        )}
      </div>
    </section>
  );
};

export default ApiError;
