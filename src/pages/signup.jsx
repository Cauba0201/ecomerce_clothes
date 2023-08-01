import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "") {
      setError("Please enter correct details!");
    } else {
      setError("Login successful");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <section className="login-wrapper p-5 ">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-center">SIGN UP</h2>
                <p className="text-center mb-4">Join us in shopping !</p>
                <form onClick={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label mb-3">
                      Enter Your Email Address
                    </label>
                    <input
                      type="email"
                      className="input-email form-control"
                      placeholder="Enter your email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label mb-3">
                      Enter Your Password
                    </label>
                    <input
                      type="password"
                      className="input-password form-control"
                      placeholder="Enter your password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="confirmPassword"
                      className="form-label mb-3 "
                    >
                      Confirm Your Password
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      placeholder="Rewrite password here "
                      className="form-control confirmPassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="mb-3">
                    <Link to="/forgotpassword">Forgot Password</Link>
                  </div>
                  <div className="mb-3 d-flex justify-content-between align-items-center">
                    <p className="m-0">Have an account?</p>
                    <Link to="/login" className="form-link">
                      Login
                    </Link>
                  </div>
                  <div className="gap-2 d-grid">
                    <button type="submit">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
