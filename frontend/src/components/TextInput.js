import React from "react";

const TextInput = React.forwardRef(
  (
    { type, placeholder, styles, label, labelstyles, register, name, error },
    ref
  ) => {
    return <div className="text-input">{label && <p>{label}</p>}
    <div>
        <input type={type} 
        name={name}
        placeholder={placeholder}
        ref={ref} 
        {...register}
        aria-invalid={error ? "true" : "false"}
        />
    </div>
    </div>;
  }
);

export default TextInput;
