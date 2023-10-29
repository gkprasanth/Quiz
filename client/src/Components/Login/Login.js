import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "", 
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    name: "", 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setError({
      ...error,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      setError({ ...error, email: "Email is required" });
      return;
    }

    if (!formData.password) {
      setError({ ...error, password: "Password is required" });
      return;
    }

    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/; 
    if (!emailRegex.test(formData.email)) {
      setError({ ...error, email: "Invalid email format" });
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        const responseData = await response.json();
        toast.success("Login successful");
        console.log("Login Successful", responseData);
        setTimeout(() => {
          navigate('/signup');
        }, 2000);
      } else {
        const errorData = await response.json();
        if (response.status === 401) {
          toast.error("Invalid email or password");
        } else if (response.status === 404) {
          toast.error("User does not exist");
        } else {
          setError({ ...error, email: errorData.message || "Login failed" });
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      setError({ ...error, email: "Network error" });
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={error.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder={error.password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
      />
    </div>
  );
}

export default Login;
