import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { signup, isLoading, error } = useSignup();

  const handleSignup = async () => {
    const user = await signup(email, password);

    if (user) {
      setIsAuthenticated(true);
      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>

      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />

      <button onClick={handleSignup} disabled={isLoading}>
        {isLoading ? "Signing up..." : "Sign Up"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SignupComponent;
