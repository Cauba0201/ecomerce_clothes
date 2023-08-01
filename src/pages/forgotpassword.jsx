import React, { useState } from "react";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [mes, setMes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = response.json();
      setMes(data.mes);
    } catch (error) {
      console.error(error);
      setMes("Wrong! . please try again later.");
    }
  };
  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body p-4">
                <h2 className="text-center">Forgot Password</h2>
                <p className="text-center mb-4">
                  Enter your email address to receive a reset confirrmatio{" "}
                </p>
                <form onClick={handleSubmit}>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFogotpasswordInput"
                      className="form-label mb-3"
                    ></label>
                    <input
                      type="email"
                      value={email}
                      className="form-control exampleFogotpasswordInput"
                      placeholder="Enter your email..."
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-gird   gap-2">
                    <button type="submit">Submit</button>
                  </div>
                </form>
                {mes && <p className="text-center mt-4">{mes}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forgotpassword;
