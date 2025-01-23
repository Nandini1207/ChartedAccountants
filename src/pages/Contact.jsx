import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // To show loading spinner

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Please enter a valid email.";
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      setFormSuccess(false);
      setLoading(true);

      // Mock backend API call
      setTimeout(() => {
        setFormSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      }, 2000);
    } else {
      setFormErrors(errors);
      setFormSuccess(false);
    }
  };

  return (
    <>
      {/* Contact Form Section with unique styles */}
      <section className="contact-section py-16  text-white" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-center text-4xl font-semibold mb-8 uppercase tracking-wider text-black">
            Get in Touch
          </h2>
          <form
            onSubmit={handleSubmit}
            className="contact-form p-8 rounded-lg shadow-2xl bg-white text-black border-t-8 border-green-500 transform hover:scale-105 transition duration-300"
          >
            <div className="mb-6">
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-4 py-3 rounded-lg border-2 text-gray-800 focus:outline-none focus:border-green-500 transition-all ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.name}
                onChange={handleChange}
                aria-invalid={formErrors.name ? "true" : "false"}
                aria-describedby="name-error"
                required
              />
              {formErrors.name && (
                <p id="name-error" className="text-red-500 text-sm mt-1">
                  {formErrors.name}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-4 py-3 rounded-lg border-2 text-gray-800 focus:outline-none focus:border-green-500 transition-all ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.email}
                onChange={handleChange}
                aria-invalid={formErrors.email ? "true" : "false"}
                aria-describedby="email-error"
                required
              />
              {formErrors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1">
                  {formErrors.email}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className={`w-full px-4 py-3 rounded-lg border-2 text-gray-800 focus:outline-none focus:border-green-500 transition-all ${
                  formErrors.message ? "border-red-500" : "border-gray-300"
                }`}
                rows="6"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={formErrors.message ? "true" : "false"}
                aria-describedby="message-error"
                required
              ></textarea>
              {formErrors.message && (
                <p id="message-error" className="text-red-500 text-sm mt-1">
                  {formErrors.message}
                </p>
              )}
            </div>
            <div className="text-center mt-8">
              <button
                type="submit"
                className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transform hover:scale-110 transition-all duration-300"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
          {formSuccess && (
            <p className="text-green-500 text-center mt-4 text-lg font-semibold">
              Submitted successfully! We will get back to you soon.
            </p>
          )}
         
        </div>
      </section>
    </>
  );
};

export default Contact;
