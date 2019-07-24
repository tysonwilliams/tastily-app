import React, { useState } from "react";

function SignupForm() {
  return (
      <form>
        <div>
          <label for="firstName">First name:</label>
          <input type="text" id="firstName" name="user_firstName" />
        </div>
        <div>
          <label for="lastName">Last name:</label>
          <input type="text" id="lastName" name="user_lastName" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="user_email" />
        </div>
      </form>
  );
}

export default SignupForm;
