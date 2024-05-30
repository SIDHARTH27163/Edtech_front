import React,{useEffect , useState} from 'react'
import Custom_h1 from '../Custom_fonts/Custom_h1'
import Custom_input from '../FormCompnents/Custom_input'
import Editor from '../FormCompnents/Editor'
import { API_URL } from '../constant/util'
import axios from 'axios'
import Custom_button from '../FormCompnents/Custom_Button'
import Cookies from 'js-cookie';
import Success_alerts from '../Custom_alerts/Success_alerts'
import Warning_alerts from '../Custom_alerts/Warning_alerts'
function Add_course(props) {
  const [file, setFile] = useState(null);
  const [domains, setdomains] = useState([]);
  const [d_id, setd_id] = useState('');
  const [name, setname] = useState('');
  const [details, setdetails] = useState('');
  const [t_from, setfrom] = useState('');
  const [t_to, setto] = useState('');
  const [date, setdate] = useState('');
  const [price, setprice] = useState('');
  const [duration, setduration] = useState('');
  const [errors, setErrors] = useState([]);
  const [s_alert, setsAlert] = useState(null);

  const [f_alert, setfAlert] = useState(null);
  const [resetEditor, setResetEditor] = useState(false);
  useEffect(() => {
      const fetchDomains = async () => {
          try {
              const response = await axios.get(`${API_URL}/domains/get`);
              setdomains(response.data.domains);
          } catch (error) {
              console.log(error.response);
          }
      };

      fetchDomains();
  }, []);

  const handleInputData = (data) => {
      setdetails(data);
  };

  const handleFileChange = (e) => {
      setFile(e.target.files[0]);
  };
  const resetForm=()=>{
   setname('')
   setd_id('')
   setdate('')
   setto('')
   setfrom('')
   setdetails('')
   setprice('')
   setResetEditor(true);
  setduration('');
    setFile(null)
  }
  const submit = async () => {
      const sessionToken = Cookies.get('sessionToken');
      if (!sessionToken) {
          throw new Error('Session token not found');
      }

      const formData = new FormData();
      formData.append('c_name', name);
      formData.append('d_id', d_id);
      formData.append('c_details', details);
      formData.append('timing_from', t_from);
      formData.append('timing_to', t_to);
      formData.append('start_date', date);
      formData.append('price', price);
      formData.append('c_duration', duration);
      formData.append('image', file);

      const headers = {
          'Content-Type': 'multipart/form-data',
          'session-token': sessionToken,
      };

      try {
          const response = await axios.post('http://localhost:1024/api/courses', formData, { headers });
          if (response.status === 200) {
       
            setsAlert(response.data.msg)
           //  setCourses(prevCourses => [...prevCourses, response.data.course]);
          //  const updatedCoursesResponse = await axios.get('http://localhost:1024/api/domains');
          //  setCourses(updatedCoursesResponse.data.domain);
           resetForm()
           } else {
         
             setfAlert(response.data.errormsg)
           
           }
         } catch (error) {
           console.log(error.response.data.errors )
           setErrors(error.response.data.errors || []);
         }
  };


    return (
        <div className='mx-auto mb-6 h-auto p-5 relative w-full'>
        <div className='lg:p-5 md:p-5 p-2 max-w-5xl mx-auto bg-gray-100'>
        <Custom_h1
          text="Add Course For Domain"
          className="text-rose-600 font-Averia font-bold my-2 underline text-3xl"
        />
        <div className='p-5 max-w-3xl mx-auto rounded-xl shadow-lg bg-white'>

       
        {s_alert ?<><Success_alerts text={s_alert}/></>:<></>}
        {f_alert ?<><Warning_alerts text={f_alert}/></>:<></>}
        <div className='my-1 p-1'>
        <label for="countries" className="block font-bold text-md text-slate-900 font-Raleway">Select an option</label>
  <select value={d_id} onChange={(e)=>setd_id(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-Raleway">
    <option selected className='font-bold text-md'>Choose a Domain</option>
    {Array.isArray(domains) && domains.map(option => (
    <option key={option.name} value={option.id} className='font-bold text-md'>{option.name}</option>
))}

   

  </select>
        </div>
        {errors.map(error => error.path === 'd_id' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
         
        <Custom_input
            label="Enter Course Title"
            forinput="type"
            placeholder="Eg:Web Development"
            type="text"
            className="mt-1 block w-full"
            handleInputData={setname}
            value={name}
            autoComplete=""
            isFocused={true}
          />
            {errors.map(error => error.path === 'c_name' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
         
            <Editor handleInputData={handleInputData} resetEditor={resetEditor} />
         {errors.map(error => error.path === 'c_details' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
         <div className='grid grid-cols-2'>
         <div className='w-full'>
         <Custom_input
            label="Timing From"
            forinput="time"
            placeholder="Eg:Web Development"
            type="time"
            className="mt-1 block w-full"
            handleInputData={setfrom}
            value={t_from}
            autoComplete=""
            isFocused={true}
          />
             {errors.map(error => error.path === 'timing_from' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
         
         </div>
           <div className='w-full'>
           <Custom_input
            label="Timing to"
            forinput="time"
            placeholder="Eg:Web Development"
            type="time"
            className="mt-1 block w-full"
            handleInputData={setto}
            value={t_to}
            autoComplete=""
            isFocused={true}
          />
             {errors.map(error => error.path === 'timing_to' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
         
           </div>
             <div className='w-full'>
             <Custom_input
            label="Enter Course Start Date"
            forinput="time"
            placeholder="Eg:Web Development"
            type="date"
            className="mt-1 block w-full"
            handleInputData={setdate}
            value={date}
            autoComplete=""
            isFocused={true}
          />
             {errors.map(error => error.path === 'start_date' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
         
             </div>
           <div className='w-full'>
           <Custom_input
            label="Enter Course Duration"
            forinput="time"
            placeholder="Eg: 1 Month , 3 Month"
            type="text"
            className="mt-1 block w-full"
            handleInputData={setduration}
            value={duration}
            autoComplete=""
            isFocused={true}
          />
             {errors.map(error => error.path === 'c_duration' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
         
           </div>
         </div>
        
         <Custom_input
            label="Enter price in INR"
            forinput="type"
            placeholder="Eg:1200 per month"
            type="text"
            className="mt-1 block w-full"
            handleInputData={setprice}
            value={price}
            autoComplete=""
            isFocused={true}
          />
             {errors.map(error => error.path === 'price' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
         
 <div className='p-1 m-1'>
                        <label htmlFor="image" className='block font-bold text-md text-slate-900 font-Raleway'>
                            Upload Image
                        </label>
                        <input
                            className='border-blue-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-black '
                            filename={file}
                            onChange={handleFileChange}
                            type="file"
                            accept="image/*"
                        />
                    </div>
                    {errors.map(error => error.path === 'image' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
         
          <Custom_button
            onClick={submit}
            text="Submit"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="mr-1 -ml-1 w-6 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
        </div>
        
        </div>
        </div>
    )
}

export default Add_course
