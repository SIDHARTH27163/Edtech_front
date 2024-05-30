import React,{useState , useEffect} from 'react'
import Custom_input from '../FormCompnents/Custom_input'
import Custom_button from '../FormCompnents/Custom_Button'
import Custom_h1 from '../Custom_fonts/Custom_h1'
import axios from 'axios'
import Success_alerts from '../Custom_alerts/Success_alerts'
import Warning_alerts from '../Custom_alerts/Warning_alerts'
import Cookies from 'js-cookie'

import {API_URL} from '../constant/util'
function Login() {

const[email,setemail]=useState('')
const[password , setpassword]=useState('')
const [errors, setErrors] = useState([]);
const [s_alert, setsAlert] = useState(null);
const [s_alerts, setsAlerts] = useState(null);
const [f_alert, setfAlert] = useState(null);
const [loading, setLoading] = useState(true);
const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
const submit = async (e) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email: email,
      password: password,
      remember:isChecked
    },{
        withCredentials:true
    }
    
    
    
    );
    if (response.status === 200) {
      setsAlert(response.data.message);
      Cookies.set('sessionToken', response.data.sessionToken, { expires: 1 });
                Cookies.set('rememberToken', response.data.rememberToken, { expires: 1 });
     
    //   console.log(response.data.sessionToken)
    //   console.log(response.data.rememberToken)
    } else {
      setfAlert(response.data.error);
    }
  } catch (error) {
    // console.log(error.response.status===401);
    if(error.response.status===401){
        setfAlert(error.response.data.error)
    }
    setErrors(error.response.data.errors || []);
  }
};


    return (
       <div className='max-w-6xl mx-auto border-2 border-black p-1 flex items-center justify-center h-screen px-5'>
<div className='md:w-1/2 w-full mx-auto p-2 bg-white  rounded-2xl  shadow-2xl'>
<div className="sm:mx-auto sm:w-full sm:max-w-sm">

<img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
<Custom_h1
          text="Signin"
          className=" font-Roboto font-bold  underline text-2xl text-center leading-9 tracking-tight"

        />
        {s_alert ?<><Success_alerts text={s_alert}/></>:<></>}
        {f_alert ?<><Warning_alerts text={f_alert}/></>:<></>}
        </div>
<div className='p-1'>

<Custom_input
            label="Enter Your Email"
            forinput="email"
            placeholder="Eg:john@gmail.com"
            type="text"
            className="mt-1 block w-full"
            handleInputData={setemail}
            value={email}
            autoComplete="true"
            isFocused={true}
          />
          {errors.map(error => error.path === 'email' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
<Custom_input
            label="Enter Your Password"
            forinput="password"
            placeholder="Eg:**********"
            type="password"
            className="mt-1 block w-full"
            handleInputData={setpassword}
            value={password}
            autoComplete="true"
            isFocused={true}
          />
          {errors.map(error => error.path === 'password' && <span className="text-red-500 font-Roboto font-semibold">{error.msg}</span>)}
         
          <div className="flex items-center mb-4">
      <input
        id="default-checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Remember Me
      </label>
    </div>
         
           <Custom_button
            onClick={submit}
            text="Signin"
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-1 -ml-1 w-6 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
          </svg>
          }
          />
</div>

</div>
       </div>
    )
}

export default Login
