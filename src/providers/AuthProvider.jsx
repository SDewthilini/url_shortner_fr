import { createContext, useContext, useEffect, useState } from "react";
import axiosServices from "../utills/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the user from the backend
    const checkSession = async () => {
      try {
        const response = await axiosServices.get("/user/session");
        if (response.data.session) {
          setUser({ id: response.data });
        } else {
          // Redirect to Spring Boot's default login page if no session
          window.location.href = 'http://localhost:8080/login';
        }
      } catch (error) {
        console.error("Session check failed:", error);
        // Also redirect on error
        window.location.href = 'http://localhost:8080/login';
      }
      setLoading(false);
    };
    checkSession();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axiosServices.get("/login");

      if (!response.ok) throw new Error("Login failed");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  // Logout function
  const logout = async () => {
    try {
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
