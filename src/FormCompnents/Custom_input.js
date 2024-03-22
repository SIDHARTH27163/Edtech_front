import React, { useEffect, useRef } from 'react'

export default function Custom_input(props) {

  const input = useRef();

  useEffect(() => {
    if (props.isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <div className='my-1 p-2'>
          <label htmlFor={props.forinput} className={`block font-bold text-md  text-slate-900 font-Raleway `}>
            {props.label}
        </label>
      <input
        type={props.type}
        className={
          `border-blue-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-black ` +
          props.className
        }
        placeholder={props.Placeholder}
        value={props.value}
        onChange={(e) => props.handleInputData(e.target.value)}
        ref={input}
        autoComplete={props.autoComplete}
      />
    </div>
  )
}