import React from 'react';
import { addPostSchema } from '../../utils/validationSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Select from 'react-select';

const CreatePost = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [editorData, setEditorData] = useState('');
  const [files, setFiles] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(addPostSchema)
  });

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };


  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('tags', selectedOptions.map(option => option.value));
    formData.append('image', files[0]); // Append the image file to the FormData
    formData.append('body', editorData);
    console.log("data", data)
    try {
      const response = await axios.post('http://localhost:3000/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure correct content type
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success('Post created successfully');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <div className="w-full lg:w-1/2 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex md:flex-row flex-col gap-4">
          <div className='w-full'>
            <label htmlFor="title" className="block">Title:</label>
            <input type="text" name="title" {...register('title')} className="w-full border border-gray-300 rounded p-2" />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>
          <div className="w-full">
            <label htmlFor="tags" className="block">Tags:</label>
            <Select
              // name="tags"
              options={options}
              isMulti
              value={selectedOptions} // Set the selected options
              onChange={handleSelectChange}
              // {...register('tags')} // Register the selected options with React Hook Form
            />
          </div>

        </div>
        <div>
          <label htmlFor="image" className="block">Image:</label>
          <input type="file" name="image" onChange={handleFileChange} className="w-full border border-gray-300 rounded p-2" />
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>
        <div>
          <label htmlFor="body" className="block">Body:</label>
          <CKEditor
            name="body"
            editor={ClassicEditor}
            data={editorData} // Set initial data from state
            onChange={handleEditorChange} // Handle editor changes
          />
          {errors.body && <p className="text-red-500 text-sm">{errors.body.message}</p>}
        </div>


        <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
