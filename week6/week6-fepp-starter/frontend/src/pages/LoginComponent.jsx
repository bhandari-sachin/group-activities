import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import useField from "../hooks/useField";

const LoginComponent = ({ setIsAuthenticated }) => {
  // useField for inputs
  const email = useField("text");
  const password = useField("password");

  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await login(email.value, password.value);

    if (user) {
      setIsAuthenticated(true);

      // reset fields after successful login
      email.reset();
      password.reset();

      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

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

      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? "Logging in..." : "Log in"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LoginComponent;
