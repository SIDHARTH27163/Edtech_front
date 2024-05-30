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
function Add_material(props) {

  const [course, setcourse] = useState([]);
 
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');
  const [c_id, setc_id] = useState('');
  const [type, settype] = useState('');
  const [url, seturl] = useState('');
 
 
  const [errors, setErrors] = useState([]);
  const [s_alert, setsAlert] = useState(null);

  const [f_alert, setfAlert] = useState(null);
  const [resetEditor, setResetEditor] = useState(false);
  useEffect(() => {
    const sessionToken = Cookies.get('sessionToken');
    if (!sessionToken) {
        throw new Error('Session token not found');
    }
    const headers = {
      'Content-Type': 'multipart/form-data',
      'session-token': sessionToken,
  };
      const fetchDomains = async () => {
          try {
              const response = await axios.get(`${API_URL}/courses/coursesbyuser`,{ headers });
              setcourse(response.data.courses);
          } catch (error) {
              console.log(error.response);
          }
      };

      fetchDomains();
  }, []);

  const handleInputData = (data) => {
   
    setdescription(data);
};

  const resetForm=()=>{
   setname('')
  settype('')
  seturl('')
  setc_id('')
  setResetEditor(true);
  
  }
  const submit = async () => {
    const sessionToken = Cookies.get('sessionToken');
    if (!sessionToken) {
        throw new Error('Session token not found');
    }

    const headers = {
        'Content-Type': 'application/json',
        'session-token': sessionToken,
    };

    const data = {
        material_name: name,
        material_type: type,
        material_url: url,
        course_id: c_id,
        description:description
    };

    try {
        const response = await axios.post('http://localhost:1024/api/user/coursematerial', data, { headers });

        if (response.status === 200) {
            setsAlert(response.data.msg);
            resetForm();
        } else {
            setfAlert(response.data.errormsg);
        }
    } catch (error) {
        console.error('Error:', error);
        setErrors(error.response.data.errors || []);
    }
};


    return (
        <div className='mx-auto mb-6 h-auto p-5 relative w-full'>
        <div className='lg:p-5 md:p-5 p-2 max-w-5xl mx-auto bg-gray-100'>
        <Custom_h1
          text="Add Course Material"
          className="text-rose-600 font-Averia font-bold my-2 underline text-3xl"
        />
        <div className='p-5 max-w-3xl mx-auto rounded-xl shadow-lg bg-white'>

       
        {s_alert ?<><Success_alerts text={s_alert}/></>:<></>}
        {f_alert ?<><Warning_alerts text={f_alert}/></>:<></>}
        <div className='my-1 p-1'>
        <label for="countries" className="block font-bold text-md text-slate-900 font-Raleway">Select a course</label>
  <select value={c_id} onChange={(e)=>setc_id(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-Raleway">
    <option selected className='font-bold text-md'>Choose a course</option>
    {Array.isArray(course) && course.map(option => (
    <option key={option.id} value={option.id} className='font-bold text-md'>{option.c_name}</option>
))}

   

  </select>
        </div>
        {errors.map(error => error.path === 'course_id' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
         
        <Custom_input
            label="Enter Material Title"
            forinput="type"
            placeholder="Eg:Web Development"
            type="text"
            className="mt-1 block w-full"
            handleInputData={setname}
            value={name}
            autoComplete=""
            isFocused={true}
          />
            {errors.map(error => error.path === 'material_name' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
            <div className='my-1 p-1'>
            <label for="countries" className="block font-bold text-md text-slate-900 font-Raleway">Course Materail Description</label>
            <Editor handleInputData={handleInputData} resetEditor={resetEditor} />
         {errors.map(error => error.path === 'description' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
        </div>
         <div className='grid grid-cols-2'>
         <div className='w-full'>
         <Custom_input
            label="Material Type"
            forinput="text"
            placeholder="Eg:PDF , DOCX"
            type="text"
            className="mt-1 block w-full"
            handleInputData={settype}
            value={type}
            autoComplete=""
            isFocused={true}
          />
             {errors.map(error => error.path === 'material_type' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
         
         </div>
           <div className='w-full'>
           <Custom_input
            label="Material Url"
            forinput="url"
            placeholder="Eg:abc.com"
            type="text"
            className="mt-1 block w-full"
            handleInputData={seturl}
            value={url}
            autoComplete=""
            isFocused={true}
          />
             {errors.map(error => error.path === 'material_url' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
         
           </div>
           
        
         </div>
        

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

export default Add_material
