import React from 'react'

export default function Custom_file(props) {

  console.log(props.filename)
  return (
    <div>
        <div className=''>
        
        <label className="block mb-2 text-md font-Roboto font-bold text-slate-900" >{props.text}</label>
        <input  className="block w-full  text-sm text-gray-900 rounded-lg border  cursor-pointer  focus:outline-none bg-gray-300 border-sky-600 placeholder-gray-400" id="file_input"  accept="image/*" type="file"></input>
      
            </div>
    </div>
  )
}