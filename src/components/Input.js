import React from "react";

export default function Input(props) {
  if (props.type == "textarea") {
    let textareaOptions = {
      name: props.name,
      placeholder: props.placeholder,
      cols: props.cols,
      rows: props.rows,
    };
    return <textarea {...textareaOptions}></textarea>;
  }
  return <input {...props} />;
}
