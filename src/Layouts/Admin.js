import React from 'react'
import { Route, Switch , Redirect  } from 'react-router-dom';
import AdminHome from '../Admin_pages/AdminHome';
import Admin_sidebar from '../Admin_pages/admin_components/Admin_sidebar';
import Admin_Navbar from '../Admin_pages/admin_components/Admin_navbar';
import HeaderStats from '../Admin_pages/admin_components/HeaderStats';

import Manage_course_description from '../Admin_pages/manage_course_description';
import Manage_domain from "../Admin_pages/Manage_domain";


function Admin() {
    return (
        <><Admin_sidebar />
        <div className="relative md:ml-64 bg-slate-50 h-auto pb-10">
            <Admin_Navbar/>
            <HeaderStats/>
            <div className='px-1  mx-auto w-full -mt-20'>


                <Switch>
                    <Route path="/admin/dashboard" exact component={AdminHome} />
                     <Route path="/admin/manage_domains" exact component ={Manage_domain}/>
                    <Route path="/admin/course_details" exact component={Manage_course_description}/>
                  
                    <Redirect from="/admin" to="/admin/dashboard" />
                </Switch>
            </div></div></>
    )
}

export default Admin
