import axios from 'axios';
import Cookies from 'js-cookie';
import React,{useEffect , useState} from 'react'
import { API_URL } from '../constant/util';
import { Route, Switch , Redirect  } from 'react-router-dom';
import Teachers_dash from '../Teachers/Teachers_dash';
import Sidebar_t from '../Teachers/teachers_compo/Sidebar_t'
import Admin_navbar from '../Admin_pages/admin_components/Admin_navbar'
import T_stats from '../Teachers/teachers_compo/T_stats';
import Add_course from '../Teachers/Add_course';
import Course_deatils from '../Teachers/Course_deatils';
import Add_material from '../Teachers/Add_material';
import Manage_material from '../Teachers/Manage_material';
function Teacher() {
    const [User , setuser]=useState('')
    useEffect(() => {
        const fetchCourses = async () => {
          try {
            const sessionToken = Cookies.get('sessionToken'); // Retrieve session token from cookies

            if (!sessionToken) {
                throw new Error('Session token not found');
            }

            const headers = {
                'Content-Type': 'application/json',
                'session-token': sessionToken, // Pass session token in request headers
            };

            const response = await axios.get(`${API_URL}/auth`, { headers });

           
            setuser(response.data.user)
       
         
          } catch (error) {
            // setError(error.message);
         console.log(error.response)
          }
        };
    
        fetchCourses();
      }, []);
    return (
    <>
    <Sidebar_t/>
    <div className="relative md:ml-64 bg-gray-100 h-auto pb-10 ">
        <Admin_navbar/>
       <T_stats/>
            <div className='px-1  mx-auto w-full -mt-20'>
                <Switch>
                    <Route path="/teacher/dashboard" exact component={Teachers_dash} />
                    <Route
                            path="/teacher/add_course"
                            exact
                            render={(props) => <Add_course {...props} user={User} />}
                        />
                          <Route
                            path="/teacher/course_details"
                            exact
                            render={(props) => <Course_deatils {...props} user={User} />}
                        />
                          <Route
                            path="/teacher/add-material"
                            exact
                            render={(props) => <Add_material {...props} user={User} />}
                        />
                          <Route
                            path="/teacher/manage-material"
                            exact
                            render={(props) => <Manage_material {...props} user={User} />}
                        />
                    <Redirect from="/teacher" to="/teacher/dashboard" />
                </Switch>
            </div>
        </div></>
       
    )
}

export default Teacher
