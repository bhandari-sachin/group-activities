import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  // Use useField for all inputs
  const email = useField("text");
  const password = useField("password");
  const passwordConfirm = useField("password");

  // Local state for password mismatch error
  const [matchError, setMatchError] = useState(null);

  const { signup, isLoading, error } = useSignup();
  const navigate = useNavigate();

  const handleSignup = async () => {
    // Check if passwords match
    if (password.value !== passwordConfirm.value) {
      setMatchError("Passwords do not match");
      return;
    }
    setMatchError(null);

    // Call the signup hook
    const user = await signup(email.value, password.value);

    if (user) {
      setIsAuthenticated(true);

      // reset fields after successful signup
      email.reset();
      password.reset();
      passwordConfirm.reset();

      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>

      <label>
        Email:
        <input {...email} />
      </label>
      <br />

      <label>
        Password:
        <input {...password} />
      </label>
      <br />

      <label>
        Confirm Password:
        <input {...passwordConfirm} />
      </label>
      <br />

      <button onClick={handleSignup} disabled={isLoading}>
        {isLoading ? "Signing up..." : "Sign Up"}
      </button>

      {matchError && <p style={{ color: "red" }}>{matchError}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SignupComponent;
