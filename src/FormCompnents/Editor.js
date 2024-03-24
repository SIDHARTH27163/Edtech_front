import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Editor(props) {
  const [editorKey, setEditorKey] = useState(0); // Add editorKey state

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    props.handleInputData(data);
  };

  useEffect(() => {
    // Set editor data initially if value prop is provided
    if (props.value) {
      setEditorKey(editorKey + 1); // Update editor key to reset content
    }
  }, [props.value]);

  return (
    <div className='my-1 p-1'>
      <label  className='block font-bold text-md text-slate-900 font-Raleway'>
        {props.label}
      </label>
      <CKEditor
        editor={ClassicEditor}
        data={props.value}
        key={editorKey} // Add key prop to reset editor content
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default Editor;
