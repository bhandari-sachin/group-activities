import { useState } from "react";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();
      if (!response.ok) {
        setIsLoading(false);
        setError(json.error || "Login failed");
        return null;
      }
      sessionStorage.setItem("user", JSON.stringify(json));
      setIsLoading(false);
      return json;
    } catch (error) {
      setIsLoading(false);
      setError("An error occurred during login");
      return null;
    }
  };
  return { login, isLoading, error };
};
