import React from 'react';
import logo from "../images/logo.png";
import user from "../images/user-imgss.jpg";


const Profile = () => {
    return (
        <>
            { /* header starts here... */}
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12 search">
                            {/* search form here */}
                        </div>
                        <div className="col-md-8 col-12">
                            <h1 className="navbar_header">
                                <img src={logo} className="logo-img img-fluid"></img>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
            { /* header ends here... */}


            {/* profile part starts here */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 profile-left"></div>
                    <div className="col-md-8 col-12">
                        <div className="profile-container">
                            <div className="user-profile">
                                <img src={user} className="user-profile-pic"></img>
                                <h3 className="username">Daniel D Evans</h3>
                                <p className="user-email">daniel.d.evans@gmail.com</p>
                                <a><i class="fa fa-pencil "></i></a>
                            </div>
                            <div className="user-profile-show">
                                <ul>
                                    <li>
                                        <span>First name</span>
                                        <p id="firstname" >Daniel D Evans</p>
                                        <hr />
                                    </li>
                                    <li>
                                        <span>Last name</span>
                                        <p id="lastname" >Daniel D Evans</p>
                                        <hr />
                                    </li>
                                    <li>
                                        <span>Email Address</span>
                                        <p id="email" >daniel.d.evans@gmail.com </p>
                                        <hr />
                                    </li>
                                    <li>
                                        <span>Phone Number</span>
                                        <p id="phoneNumber" >+1 937-903-2831</p>
                                        <hr />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* profile part ends here */}

        </>
    )
}

export default Profile;

