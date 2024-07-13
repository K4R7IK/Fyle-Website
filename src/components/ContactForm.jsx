import React, { useState } from "react";

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("You must accept the terms and conditions.");
      return;
    }
    fetch("https://getform.io/f/arolovvb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
          onClose();
        } else {
          alert("Form submission failed.");
        }
      })
      .catch((error) => {
        alert("An error occurred while submitting the form.");
        console.error("Error:", error);
      });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-md shadow-md w-1/4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-4 font-poppins">Talk to us</h2>
        <form
          onSubmit={handleSubmit}
          className="text-sm font-poppins font-light space-y-8"
        >
          <div className="relative">
            <label
              className={`transition-all ${
                formData.email
                  ? "text-gray-500 text-xs -top-6"
                  : "text-transparent"
              }`}
            >
              Work email*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Work email*"
              className="w-full px-3 py-2 border-b"
            />
          </div>
          <div className="columns-2 gap-9">
            <div className="relative">
              <label
                className={`transition-all ${
                  formData.firstname
                    ? "text-gray-500 text-xs -top-6"
                    : "text-transparent"
                }`}
              >
                First name*
              </label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
                placeholder="First name*"
                className="w-full px-3 py-2 border-b"
              />
            </div>
            <div className="relative">
              <label
                className={`transition-all ${
                  formData.lastname
                    ? "text-gray-500 text-xs -top-6"
                    : "text-transparent"
                }`}
              >
                Last name*
              </label>

              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
                placeholder="Last name*"
                className="w-full px-3 py-2 border-b"
              />
            </div>
          </div>
          <div className="text-gray-500 flex items-start">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              className="mr-2 h-5 w-5 bg-fyle"
            />
            <label className="font-normal">
              I agree to Fyle's terms and conditions, and provide consent to
              send me communication.
            </label>
          </div>
          <button
            type="submit"
            className="bg-fyle font-medium text-white py-4 rounded-md w-full"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
