import axios from 'axios';
import Cookies from 'js-cookie';
import React,{useEffect} from 'react'
import { API_URL } from '../constant/util';

function Profile() {
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

            console.log(response);
            console.log(response.data.user.p_type)

            
          // console.log(response.data)
         
          } catch (error) {
            // setError(error.message);
         console.log(error.response)
          }
        };
    
        fetchCourses();
      }, []);
    return (
   <h1>profile</h1>     
    )
}

export default Profile
