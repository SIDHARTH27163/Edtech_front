import React, { useState , useEffect } from 'react';
import Custom_input from '../FormCompnents/Custom_input';
import Custom_file from '../FormCompnents/Custom_file';
import Custom_h1 from '../Custom_fonts/Custom_h1';
import CustomTextarea from '../FormCompnents/CustomTextarea';
import Custom_button from '../FormCompnents/Custom_Button';
import axios from 'axios';
import Success_alerts from '../Custom_alerts/Success_alerts';
import Warning_alerts from '../Custom_alerts/Warning_alerts';

function Manage_courses() {
  const [course, setCourse] = useState('');
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [file , setfile]=useState('')
  const [duration, setDuration] = useState('');
  const [errors, setErrors] = useState([]);
  const [s_alert, setsAlert] = useState(null);
  const [s_alerts, setsAlerts] = useState(null);
  const [f_alert, setfAlert] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const handelchange=(e)=>{
    if(e.target.files[0]){
      setfile(e.target.files[0]);
    }
}
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:1024/api/courses');
        setCourses(response.data.courses); // Assuming API response is an array of courses
      
        setLoading(false);
      } catch (error) {
        // setError(error.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const resetForm=()=>{
    setCourse('');
    setHeading('');
    setDescription('');
    setDuration('');
    setfile('')
  }
  const submit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', course); // Use the value directly (e.g., course) instead of formData.name
    formData.append('description', description);
    formData.append('duration', duration);
    formData.append('heading', heading);
    formData.append('image', file);
  
      const response = await axios.post('http://localhost:1024/api/courses/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
       
        setsAlert(response.data.msg)
       //  setCourses(prevCourses => [...prevCourses, response.data.course]);
       const updatedCoursesResponse = await axios.get('http://localhost:1024/api/courses');
       setCourses(updatedCoursesResponse.data.courses);
       resetForm()
       } else {
     
         setfAlert(response.data.errormsg)
       
       }
     } catch (error) {
       
       setErrors(error.response.data.errors || []);
     }
  };
  const change_status = async (courseId) => {
    try {
      const response = await axios.put(`http://localhost:1024/api/courses/${courseId}`, {
        // Additional data if needed
      });
  
      if (response.status === 200) {
        // Fetch the updated list of courses after changing status
        const updatedCoursesResponse = await axios.get('http://localhost:1024/api/courses');
        setCourses(updatedCoursesResponse.data.courses);
  
        setsAlerts(response.data.message);
      } else {
        // Handle error (e.g., display an error message)
        console.error(response);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
  };
  
  
  return (
    <div className='mx-auto mb-6 h-auto p-5 relative w-full'>
      <div className='lg:p-5 md:p-5 p-2 max-w-5xl mx-auto bg-white'>
        <Custom_h1
          text="Add Course"
          className="text-rose-600 font-Averia font-bold my-2 underline text-3xl"
        />
        

        {s_alert ?<><Success_alerts text={s_alert}/></>:<></>}
        {f_alert ?<><Warning_alerts text={f_alert}/></>:<></>}
     
        <div className='p-5 max-w-3xl mx-auto rounded-xl shadow-lg'>
          <Custom_input
            label="Enter Course title"
            forinput="type"
            placeholder="Eg:Web Development"
            type="text"
            className="mt-1 block w-full"
            handleInputData={setCourse}
            value={course}
            autoComplete=""
            isFocused={true}
          />
          {errors.map(error => error.path === 'name' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
          <Custom_input
            label="Enter Course Duration"
            forinput="type"
            placeholder="Eg: 1 Month, 2 Months"
            type="text"
            className="mt-1 block w-full"
            handleInputData={setDuration}
            value={duration}
            autoComplete=""
            isFocused={true}
          />
          {errors.map(error => error.path === 'duration' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
    
          <CustomTextarea
            rows="3"
            label="Enter Heading"
            forinput="type"
            placeholder="Eg: welcome to the course"
            type="text"
            className="mt-1 block w-full"
            handleInputData={setHeading}
            value={heading}
            autoComplete=""
            isFocused={true}
          />
          {errors.map(error => error.path === 'heading' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
          <CustomTextarea
            rows="3"
            label="Enter Description"
            forinput="type"
            placeholder="Eg: dive into ..."
            type="text"
            className="mt-1 block w-full"
            handleInputData={setDescription}
            value={description}
            autoComplete=""
            isFocused={true}
          />
         
          {errors.map(error => error.path === 'description' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
          <div className='p-1 m-1'>
          <label htmlFor="image" className='block font-bold text-md  text-slate-900 font-Raleway'>
           Upload Banner
        </label>
          <input
          className='border-blue-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-black '
          filename={file} 
          onChange={e => setfile(e.target.files[0])} 
          type="file" 
          accept="image/*"
        ></input>
          </div>
                            {errors.map(error => error.path === 'image' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
          <Custom_button
            onClick={submit}
            text="Submit"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="mr-1 -ml-1 w-6 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
        </div>
      </div>
     

      <div className='lg:p-5 md:p-5 p-2 max-w-5xl mx-auto bg-white'>
        <Custom_h1
          text="All Added Courses"
          className="text-rose-600 font-Averia font-bold my-2 underline text-3xl"
        />
        
          {s_alerts ?<><Success_alerts text={s_alerts}/></>:<></>}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 font-Roboto">
            <thead className="text-md font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              <th scope="col" className="px-5 py-3">
                 Status
                </th>
                <th scope="col" className="px-5 py-3">
                  Course Title
                </th>
                <th scope="col" className="px-5 py-3">
                 Image
                </th>
                <th scope="col" className="px-5 py-3">
                  Course duration
                </th>
                <th scope="col" className="px-2 py-3">
                Heading
                </th>
                
                <th scope="col" className="px-5 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(courses) && courses.length > 0 ? (
              courses.map(course => (
                <tr key={course.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-raleway font-normal text-justify">
                  <td className="px-5 py-4  text-gray-900 whitespace-nowrap dark:text-white">
                    {course.status==1?<> <span className="text-green-500 font-Roboto font-semibold">Activated</span></>:<> <span className="text-red-500 font-Roboto font-semibold">Not-Activated</span></>}
                  </td>
                  <td className="px-5 py-4  text-gray-900 whitespace-nowrap dark:text-white">
                    {course.name}
                  </td>
                  <td className="px-5 py-4  text-gray-900 whitespace-nowrap dark:text-white">
                   
                  <img src={`http://localhost:1024/${course.image}`} alt="Course Image" className="object-cover h-24 w-24" />

                  </td>
                  <td className="px-5 py-4  text-gray-900 whitespace-nowrap dark:text-white">
                    {course.duration}
                  </td>
                  <td className="px-2 py-4 whitespace-normal leading-1 ">
                    {course.heading}
                  </td>
                 
                 
                  <td className="px-1 py-4 text-right">
                    <a onClick={()=>change_status(course.id)}  className=" font-medium cursor-pointer 5 text-blue-600 dark:text-blue-500 hover:underline">Change Status</a>
                  </td>
                </tr>
              )) ) : (
                <div>No courses available</div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Manage_courses;
