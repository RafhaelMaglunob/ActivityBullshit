import React, { useState } from "react";
import "./Background.css"; // CSS file for animation
function Content({ hidden = true }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={`content-container ${hidden ? "hidden" : "show"}`}>
      <div className="content-inner">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          {["Full Name", "Email", "Password", "Confirm Password"].map(
            (label, index) => {
              const type = label.toLowerCase().includes("password")
                ? "password"
                : label.toLowerCase().includes("email")
                ? "email"
                : "text";
              const name = label.replace(/\s/g, "").toLowerCase();
              return (
                <div key={index} className="form-group">
                  <label>{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={label}
                    required
                  />
                </div>
              );
            }
          )}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Content;
