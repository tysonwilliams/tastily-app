import React from "react";

import useSignUpForm from "./CustomHooks.js";

function SignupForm() {
  const signup = () => {
    alert(`User Created!
           Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First name:</label>
        <input
          type="text"
          name="firstName"
          onChange={handleInputChange}
          value={inputs.firstName}
          required
        />
      </div>
      <div>
        <label>Last name:</label>
        <input
          type="text"
          name="lastName"
          onChange={handleInputChange}
          value={inputs.lastName}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={inputs.email}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
