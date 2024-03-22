import React, { useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


  export default function Editor(props) {
 // Empty dependency array ensures useEffect runs only once, like componentDidMount

  const handleEditorChange = (event, editor) => {
    console.log(event);
  };

  const handleBlur = (event, editor) => {
    console.log('Blur.', editor);
  };

  const handleFocus = (event, editor) => {
    console.log('Focus.', editor);
  };

  return (
    <div className='my-1 p-2'>
          <label htmlFor={props.forinput} className={`block font-bold text-md  text-slate-900 font-Raleway `}>
            {props.label}
        </label>
      <CKEditor
        editor={ClassicEditor}
        data=''
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
         
        }}
        onChange={handleEditorChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
};


