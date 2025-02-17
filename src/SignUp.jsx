import React from "react";
import "./signUp.css";

const SignUp = () => {
  return (
    <div className="signin">
      {/* Background Section */}
      <div className="sign"></div>

      {/* Content Section */}
      <div className="sign-content" id="Information">
        {/* Offer and Information Section */}
        <div className="need-content">
          <h5 className="need">NEED ANY COURSES</h5>
          <h1 className="Off">
            <b>Sign up today and get 30% off <br />
            your first course.</b>
          </h1>
          <p>
            <span className="marks">✔</span> Web Design
          </p>
          <p>
            <span className="marks">✔</span> Web Development
          </p>
          <p>
            <span className="marks">✔</span> Database
          </p>
        </div>

        {/* Contact Form Section */}
        <div>
          <div className="Yourname">
            <div className="color-content">
              <h2 className="fs-1"><b>Sign Up Now</b></h2>
            </div>
            <div className="down">
              <form>
                <input type="text" className="input-field" placeholder="Enter text" /><br />
                <input type="email" className="input-field" placeholder="Enter Email" /><br />
                {/* select */}
                <select className="custom-select">
                  <option value="option1" id="call">Select Course</option>
                  <option value="option2" className="">Course 1</option>
                  <option value="option3" className="">Course 3</option>
                  <option value="option3" className="">Course 3</option>
                </select>
                <button className="custom-button" >Click Me</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
