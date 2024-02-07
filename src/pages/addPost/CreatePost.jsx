import React from 'react';
import { addPostSchema } from '../../utils/validationSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [files, setFiles] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(addPostSchema)
  });

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };
  

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('tags', data.tags);
    formData.append('image', files[0]); // Append the image file to the FormData
  
    console.log("formData", formData);
  
    try {
      const response = await axios.post('http://localhost:3000/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure correct content type
        },
      });
      if (response.status === 200) {
        console.log('Post created successfully');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  
  

  return (
    <div className="w-full lg:w-1/2 mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* <h2 className="text-2xl font-bold mb-4">Create a New Post</h2> */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex md:flex-row flex-col gap-4">
          <div className='w-full'>
            <label htmlFor="title" className="block">Title:</label>
            <input type="text" id="title" {...register('title')} className="w-full border border-gray-300 rounded p-2" />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>
          <div className='w-full'>
            <label htmlFor="tags" className="block">Tags:</label>
            <input type="text" id="tags" {...register('tags')} className="w-full border border-gray-300 rounded p-2" />
            {errors.tags && <p className="text-red-500 text-sm">{errors.tags.message}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="image" className="block">Image:</label>
          <input type="file" onChange={handleFileChange} className="w-full border border-gray-300 rounded p-2" />
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>
        {/* <div>
          <label htmlFor="body" className="block">Body:</label>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Tell your story!</p>"
            onChange={(event, editor) => {
              const data = editor.getData();
              register('body').onChange(data);
            }}
          />
          {errors.body && <p className="text-red-500 text-sm">{errors.body.message}</p>}
        </div> */}


        <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
