import React,{useEffect , useState} from 'react'
import Custom_h1 from '../Custom_fonts/Custom_h1'
import { API_URL } from '../constant/util';
import axios from 'axios';
import Cookies from 'js-cookie';
import Success_alerts from '../Custom_alerts/Success_alerts';
import Warning_alerts from '../Custom_alerts/Warning_alerts';

export default function Manage_course() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [s_alerts, setsAlerts] = useState(null);
    const [f_alert, setfAlert] = useState(null);
    const sessionToken = Cookies.get('sessionToken');
    if (!sessionToken) {
        throw new Error('Session token not found');
    }
    const headers = {
      'Content-Type': 'multipart/form-data',
      'session-token': sessionToken,
  };
    useEffect(() => {
        const fetchCourses = async () => {
          try {
            
            const sessionToken = Cookies.get('sessionToken');
            if (!sessionToken) {
                throw new Error('Session token not found');
            }
            const headers = {
              'Content-Type': 'multipart/form-data',
              'session-token': sessionToken,
          };
            const response = await axios.get(`${API_URL}/courses/coursesbyuser` ,{ headers });
            setCourses(response.data.courses);
            console.log(response)
              setLoading(false);
            } catch (error) {
             
              setLoading(false);
            }
        };
    
        fetchCourses();
      }, []);
      const change_status = async (courseId) => {
      
        try {
            const response = await axios.put(`${API_URL}/courses/${courseId}`);

          

            if (response.status === 200) {
                const updatedCoursesResponse = await axios.get(`${API_URL}/courses/coursesbyuser`, { headers });
                setCourses(updatedCoursesResponse.data.courses);
                setsAlerts(response.data.message);
            } else {
                setfAlert(response.data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
      const  delete_course=async(course_Id)=>{
        const sessionToken = Cookies.get('sessionToken');
    if (!sessionToken) {
        throw new Error('Session token not found');
    }
    const headers = {
      'Content-Type': 'multipart/form-data',
      'session-token': sessionToken,
  };
        try {
            const response = await axios.delete(`${API_URL}/courses/${course_Id}`);
           
        console.log(response)
            if (response.status === 200) {
            
              const updatedCoursesResponse = await axios.get(`${API_URL}/courses/coursesbyuser` , { headers });
              setCourses(updatedCoursesResponse.data.courses);
        
              setsAlerts(response.data.message);
            } else {
              // Handle error (e.g., display an error message)
            
              setfAlert(response.data.error)
            }
          } catch (error) {
            // Handle network or other errors
            console.error('Error:', error.response);
            setfAlert(error.response.data.errormsg)
          }
      }
  return (
   
    <div className='mx-auto mb-6 h-auto p-5 relative w-full'>
        <div className='lg:p-5 md:p-5 p-2 max-w-5xl mx-auto bg-gray-100'>
        <Custom_h1
          text="Your Added Courses"
          className="text-rose-600 font-Averia font-bold my-2 underline text-3xl"
        />
        <div className='lg:p-5 md:p-5 p-2 max-w-5xl mx-auto bg-white'>
       
        
          {s_alerts ?<><Success_alerts text={s_alerts}/></>:<></>} 
          {f_alert ?<><Warning_alerts text={f_alert}/></>:<></>}
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

                <th scope="col" className="px-2 py-3">
                Duration
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
                    {course.c_name}
                  </td>
                  <td className="px-5 py-4  text-gray-900 whitespace-nowrap dark:text-white">
                   
                  <img src={`http://localhost:1024/${course.image}`} alt="Course Image" className="object-cover h-24 w-24" />

                  </td>

                  <td className="px-2 py-4 whitespace-normal leading-1 ">
                    {course.c_duration} Month
                  </td>
                 
                 
                  <td className="px-1 py-4 text-right">
                    <a onClick={()=>change_status(course.id)}  className=" font-medium cursor-pointer 5 text-amber-600 dark:text-amber-500 hover:underline">Change Status</a><br></br>
                    <a onClick={()=>delete_course(course.id)}  className=" font-medium cursor-pointer 5 text-red-600 dark:text-red-500 hover:underline">Delete Course</a>
                  </td>
                 
                </tr>
              )) ) : (
                <div>No courses available</div>
              )}
            </tbody>
          </table>
        </div>
      </div>
   
   </div></div>
  )
}
