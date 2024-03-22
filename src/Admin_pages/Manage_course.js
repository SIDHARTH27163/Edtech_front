import React from 'react'
import Custom_input from '../FormCompnents/Custom_input'
import Custom_h1 from '../Custom_fonts/Custom_h1'
import CustomTextarea from '../FormCompnents/CustomTextarea'
import Editor from '../FormCompnents/Editor'
import Custom_button from '../FormCompnents/Custom_Button'





function Manage_courses() {
    return (
    <div className='mx-auto mb-6 h-auto p-5  relative  w-full'>
        <div className='p-5 max-w-5xl mx-auto  bg-white'>
            <Custom_h1
            text="Add Course"
            className="text-rose-600 font-Averia font-bold my-2 underline text-3xl"
            
            />
            <div className='p-5  max-w-3xl  mx-auto rounded-xl  shadow-lg'>
            <Custom_input
            label="Enter Course Name"
            forinput="type"
        Placeholder="Eg:3 years , 2 years "
        type="text"
        className="mt-1 block w-full"
        handleInputData={""}
        value={""}
        autoComplete=""
        isFocused={true}
        />              
                       <CustomTextarea
                       rows="3"
                        label="Enter Heading"
                        forinput="type"
                    Placeholder="Eg:3 years , 2 years "
                    type="text"
                    className="mt-1 block w-full"
                    handleInputData={""}
                    value={""}
                    autoComplete=""
                    isFocused={true}
                    />   

                      <Editor
                       label="Enter Complete Description of Course"
                       forinput="type"
                      />

<Custom_button
 onClick=""
text="Submit"
icon={<svg xmlns="http://www.w3.org/2000/svg" className="mr-1 -ml-1 w-6 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>}
/>
            </div>
        </div>
    </div>
    )
}
                 
export default Manage_courses
