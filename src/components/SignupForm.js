import React, { useState } from "react";

function SignupForm() {
  return (
    <form>
      <div>
        <label>First name:</label>
        <input type="text" name="firstName" required />
      </div>
      <div>
        <label>Last name:</label>
        <input type="text" name="lastName" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
