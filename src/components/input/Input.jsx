import React from 'react';
import { useId } from 'react';

const Input = React.forwardRef(function FirebaseInput({
  label,
  type = "text",
  className = "",
  ...props
}, ref) {
  const id = useId();

  return (
    <div className='w-full'>
      {label && <label
        className='inline-block mb-1 pl-1'
        htmlFor={id}>
        {label}
      </label>
      }
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-slate-400 text-white outline-none focus:bg-gray-500 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
