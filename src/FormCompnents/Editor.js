import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { API_URL } from '../constant/util';

function Editor({ handleInputData }) {
  const [editorData, setEditorData] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
   
    setEditorData(data);
    handleInputData(data); // Call parent component function with editor data
  };

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await axios.post(`${API_URL}/courses/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.url) {
        const imageUrl = response.data.url;
       
        setUploadedImageUrl(imageUrl); // Set the uploaded image URL
      } else {
        throw new Error('Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return {
        upload: async () => {
          try {
            const file = await loader.file;
            await uploadImage(file); // Upload the image
            return { default: uploadedImageUrl }; // Return the uploaded image URL
          } catch (error) {
            console.error('Error uploading image:', error);
            return null;
          }
        }
      };
    };
  }

  return (
    <>
    <CKEditor
      editor={ClassicEditor}
      data={editorData}
      onChange={handleEditorChange}
      config={{
        ckfinder: {
          uploadUrl: uploadedImageUrl // Use the uploaded image URL as uploadUrl
        },
        extraPlugins: [MyCustomUploadAdapterPlugin]
      }}
    />

    </>
  );
}

export default Editor;
