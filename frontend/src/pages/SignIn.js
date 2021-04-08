import React from "react";
import SigninComponent from "../component/SigninComponent";

const Signin = () => {
  return (
    <React.Fragment>
      <h2 className="text-center pt-4 pb-4">SignIn</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SigninComponent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin;
