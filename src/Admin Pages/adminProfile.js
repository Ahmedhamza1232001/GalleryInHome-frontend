import React from "react";
import "./adminProfile.css";
import { Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { BsGear, BsHouseDoor } from "react-icons/bs"
import { BiLogOutCircle } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";



const AdminProfile = () => {

      // Retrieve user data from session storage
  const userData = JSON.parse(localStorage.getItem("userData"));
  const name = userData ? userData.UserName : "";
  const email = userData ? userData.Email : "";
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token and session data
    sessionStorage.removeItem("token");
    localStorage.removeItem("userData");

    // Redirect to the login page
    navigate("/login");
  };

  const ProfileData = [
    {
      icoon: <BsHouseDoor className='mr-2' />,
      title: "My Account",
      link: "/adminProfile",
    },
    {
      icoon: <BsGear className='mr-2' />,
      title: "Change Password",
      link: "/adminSettings",
    },
  ]



  return (
    <>
      <div className="setting">
        <div className="container">
          <Row>
            <div className='col-lg-4'>
              <div className="aiz-user-sidenav-wrap position-relative z-1 shadow-sm">
                <div className="aiz-user-sidenav rounded c-scrollbar-light pb-5 pb-xl-0">
                  <div className="pic p-4 text-xl-center mb-4 border-bottom text-white">
                    <span className="avatar avatar-md mb-3">
                      <img src="images/userImg.png"
                        className="imagee" alt="..." />
                    </span>
                    <h4 className="h5 fs-16 mb-1 fw-600">{name}</h4>
                    <div className="text-truncate opacity-60">{email}</div>
                  </div>
                  <div className="profileList mb-3">
                    <ul className="aiz-size-nav-list px-2 metismenu ">
                      {ProfileData.map((val, key) => {
                        return (
                          <li key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : " "}
                            onClick={() => { window.location.pathname = val.link }}>
                            <div>
                              {val.icoon}
                              {val.title}
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-8'>
              <div className="profile-area">
                <div className="container-fluid">
                  <Row>
                    <div className="col-12">
                      <div className="profile-topbar d-xl-flex align-items-end justify-content-between">
                        <div className="total-products p">
                          <h3> <BsHouseDoor className='mr-2' /> My Account </h3>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="form">
                    <Row>
                      <div className='col-md-6 mb-3'>
                        <label> Name:</label>
                        <p>{name}</p>
                      </div>
               
                    </Row>
                    <Row>
                      <div className='col-12 mb-3'>
                        <label>Email:</label>
                        <p>{email}</p>
                      </div>
                    </Row>
                 
  
                    <Row>
                      <div className='subs-btn'>
                        <Link to="/adminSettings" className='btn sub-btn w-100 '>Edit</Link>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </>
  )
}
export default AdminProfile;
