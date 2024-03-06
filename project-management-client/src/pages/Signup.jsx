/* Import React / React-Router-Dom Features  */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* Import Axios */
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  // Initialize navigate
  const navigate = useNavigate();

  const handleSignUpSubmit = (e) => {
    // Prevent Default Actions of the Form -> refresh the page.
    e.preventDefault();

    const reqBody = { email, password, name };

    axios
      .post("http://localhost:5005/auth/signup", reqBody)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.data.message;
        setError(errorDescription);
      });
  };

  return (
    <div>
      <h1>Sign-up Page</h1>
      <form onSubmit={handleSignUpSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
