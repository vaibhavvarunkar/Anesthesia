import React from 'react';
import logo from "../images/logo.png";

const Change_pass = () => {
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


            {/* change password part starts here */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 profile-left"></div>
                    <div className="col-md-8 col-12">
                        <div className="change-pass">
                            <div className="change-pass-text">Change Password</div>
                            <div className="pass-form">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Old Password</label>
                                        <input type="password" class="form-control" id="exampleInputEmail1" placeholder="Enter Old Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">New Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="New Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Confirm New Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm New Password" />
                                    </div>
                                    <button type="submit" class="btn btn-warning">Update Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* change password part ends here */}
        </>
    )
}

export default Change_pass;
