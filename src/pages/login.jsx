import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
                <h2 className="text-center">LOGIN</h2>
                <p className="text-center mb-4">Welcome Back !</p>
                <form onClick={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label mb-3">
                      Enter Your Email Address
                    </label>
                    <input
                      type="email"
                      className="input-email"
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
                      className="input-password"
                      placeholder="Enter your password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="mb-3">
                    <Link to="/forgotpassword">Forgot Password</Link>
                  </div>
                  <div className="mb-3 d-flex justify-content-between align-items-center">
                    <p className="m-0">Dont have an account?</p>
                    <Link to="/signup" className="form-link">
                      Sign Up
                    </Link>
                  </div>
                  <div className="gap-2 d-grid">
                    <button type="submit">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
