/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";



export default function Sidebar_t() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:scrollbar-thin  md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-slate-900 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-5 ">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-white opacity-50 md:hidden px-1 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-gray-900 m-2 py-2 px-4")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-slate-100 mr-0 inline-block underline whitespace-nowrap text-lg uppercase font-bold  px-2 py-2"
            to="/"
          >
           Dashboard
          </Link>
          {/* User */}

          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-slate-100 mr-0 inline-block whitespace-nowrap text-lg  uppercase font-bold px-0 "
                    to="/"
                  >
                   Dashboard
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none ">

              <li className="items-center">
                <Link
                  className={
                    "text-sm uppercase py-4  font-semibold block font-Roboto " +
                    (window.location.href.indexOf("/teacher/dashboard") !== -1
                      ? "text-sky-500 hover:text-sky-600"
                      : "text-slate-100 hover:text-slate-200")
                  }
                  to="/teacher/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-lg " +
                      (window.location.href.indexOf("/teacher/dashboard") !== -1
                        ? "opacity-75"
                        : "text-sky-600")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li></ul>

            {/* Divider */}
            <hr className="my-2 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-400 text-sm font-Raleway uppercase font-bold block pt-1 pb-4 no-underline">
              Manage Courses
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">

              <li className="items-center">
                <Link
                  className={
                    "text-sm uppercase py-2  font-semibold block font-Roboto " +
                    (window.location.href.indexOf("/teacher/add_course") !== -1
                      ? "text-sky-500 hover:text-sky-600"
                      : "text-slate-100 hover:text-slate-200")
                  }
                  to="/teacher/add_course"
                >
                  <i
                    className={
                      "fas fa-book mr-2 text-lg " +
                      (window.location.href.indexOf("/teacher/add_course") !== -1
                        ? "opacity-75"
                        : "text-sky-600")
                    }
                  ></i>{" "}
                 Add Course
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-sm uppercase py-2  font-semibold block font-Roboto " +
                    (window.location.href.indexOf("/teacher/course_details") !== -1
                      ? "text-sky-500 hover:text-sky-600"
                      : "text-slate-100 hover:text-slate-200")
                  }
                  to="/teacher/course_details"
                >
                  <i
                    className={
                      "fas fa-address-book mr-2 text-lg " +
                      (window.location.href.indexOf("/teacher/course_details") !== -1
                        ? "opacity-75"
                        : "text-sky-600")
                    }
                  ></i>{" "}
                  Course Details
                </Link>
              </li>


            </ul>

            {/* Divider */}
            <hr className="my-1 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-400 text-sm font-Raleway uppercase font-bold block pt-1 pb-4 no-underline">
              Course Material 
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={
                    "text-sm uppercase py-2  font-semibold block font-Roboto " +
                    (window.location.href.indexOf("/teacher/add-material") !== -1
                      ? "text-sky-500 hover:text-sky-600"
                      : "text-slate-100 hover:text-slate-200")
                  }
                  to="/teacher/add-material"
                >
                  <i
                    className={
                      "fas fa-chalkboard-user mr-2 text-lg " +
                      (window.location.href.indexOf("/teacher/add-material") !== -1
                        ? "opacity-75"
                        : "text-sky-600")
                    }
                  ></i>{" "}

                  Add Course Material
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-sm uppercase py-2  font-semibold block font-Roboto " +
                    (window.location.href.indexOf("/teacher/manage-material") !== -1
                      ? "text-sky-500 hover:text-sky-600"
                      : "text-slate-100 hover:text-slate-200")
                  }
                  to="/teacher/manage-material"
                >
                  <i
                    className={
                      "fas fa-chalkboard-user mr-2 text-lg " +
                      (window.location.href.indexOf("/teacher/manage-material") !== -1
                        ? "opacity-75"
                        : "text-sky-600")
                    }
                  ></i>{" "}

                  Manage Course Material
                </Link>
              </li>


              {/* <li className="items-center">
                <Link
                  className="text-slate-100 hover:text-slate-200 text-sm uppercase py-4  font-bold block font-Roboto"
                  to="/auth/register"
                >
                  <i className="fas fa-clipboard-list text-sky-600 mr-2 text-lg"></i>{" "}
                  Register
                </Link>
              </li> */}
            </ul>

            {/* Divider */}
            {/* Divider */}
            <hr className="my-3 md:min-w-full" />

            <h6 className="md:min-w-full text-slate-400 text-sm font-Raleway uppercase font-bold block pt-1 pb-4 no-underline">
              Course Material 
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={
                    "text-sm uppercase py-2  font-semibold block font-Roboto " +
                    (window.location.href.indexOf("/admin/manage_teachers") !== -1
                      ? "text-sky-500 hover:text-sky-600"
                      : "text-slate-100 hover:text-slate-200")
                  }
                  to="/admin/manage_teachers"
                >
                  <i
                    className={
                      "fas fa-chalkboard-user mr-2 text-lg " +
                      (window.location.href.indexOf("/admin/manage_teachers") !== -1
                        ? "opacity-75"
                        : "text-sky-600")
                    }
                  ></i>{" "}

                  Add Assignments
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-sm uppercase py-2  font-semibold block font-Roboto " +
                    (window.location.href.indexOf("/admin/manage_teachers") !== -1
                      ? "text-sky-500 hover:text-sky-600"
                      : "text-slate-100 hover:text-slate-200")
                  }
                  to="/admin/manage_teachers"
                >
                  <i
                    className={
                      "fas fa-chalkboard-user mr-2 text-lg " +
                      (window.location.href.indexOf("/admin/manage_teachers") !== -1
                        ? "opacity-75"
                        : "text-sky-600")
                    }
                  ></i>{" "}

                  Manage Assignments
                </Link>
              </li>


              {/* <li className="items-center">
                <Link
                  className="text-slate-100 hover:text-slate-200 text-sm uppercase py-4  font-bold block font-Roboto"
                  to="/auth/register"
                >
                  <i className="fas fa-clipboard-list text-sky-600 mr-2 text-lg"></i>{" "}
                  Register
                </Link>
              </li> */}
            </ul>



          </div>
        </div>
      </nav>
    </>
  );
}