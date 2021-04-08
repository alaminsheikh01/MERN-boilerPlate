import React from "react";
import SignupComponent from "../component/SignUpComponet";
const SignUp = () => {
  return (
    <React.Fragment>
      <h2 className="text-center pt-4 pb-4">SignUp</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SignupComponent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
