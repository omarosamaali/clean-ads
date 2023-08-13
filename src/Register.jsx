import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userType, setUserType] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass !== confirmPass) {
      // Passwords don't match, set the error message
      setErrorMessage("Passwords do not match");
      return;
    }
    // Passwords match, continue with the registration process
    setErrorMessage(""); // Clear the error message
    console.log(email, userType);
  };

  return (
    
    <div className="auth-form-container">
      <h2>Register</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">It's quick and easy.</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Name..."
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          type="password"
          placeholder="Confirm Password"
          id="confirm-password"
          name="confirm-password"
        />
        <button type="submit">Register</button>
      </form>
      
         <label>
                    <input
                        type="radio"
                        value="publisher"
                        checked={userType === 'publisher'}
                        onChange={() => setUserType('publisher')}
                    />
                    Publisher
                </label>
                <label>
                    <input
                        type="radio"
                        value="advertiser"
                        checked={userType === 'advertiser'}
                        onChange={() => setUserType('advertiser')}
                    />
                    Advertiser
                </label>
                <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};