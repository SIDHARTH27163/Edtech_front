import React from 'react'

export default function Custom_button(
    props
) {
    
  return (
    <div className='my-1 p-2'>
       <button  onClick={props.onClick} type={props.type} className="lg:mt-2 md:mt-2 sm:mt-1 mt-0 bg-slate-800 hover:bg-slate-900 border border-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-md px-5 py-2 text-center inline-flex items-center dark:focus:ring-gray-600  text-white  mr-2 mb-2">
          {props.icon}
  {props.text}
</button>
    </div>
  )
}