import React from 'react'
import { Route, Switch , Redirect  } from 'react-router-dom';
import AdminHome from '../Admin_pages/AdminHome';
import Admin_sidebar from '../Admin_pages/admin_components/Admin_sidebar';
import Admin_Navbar from '../Admin_pages/admin_components/Admin_navbar';
import HeaderStats from '../Admin_pages/admin_components/HeaderStats';
import Manage_courses from '../Admin_pages/Manage_course';


function Admin() {
    return (
        <><Admin_sidebar />
        <div className="relative md:ml-64 bg-slate-50 h-auto pb-10">
            <Admin_Navbar/>
            <HeaderStats/>
            <div className='px-1  mx-auto w-full -mt-20'>


                <Switch>
                    <Route path="/admin/dashboard" exact component={AdminHome} />
                     <Route path="/admin/manage_courses" exact component ={Manage_courses}/>

                    <Redirect from="/admin" to="/admin/dashboard" />
                </Switch>
            </div></div></>
    )
}

export default Admin
