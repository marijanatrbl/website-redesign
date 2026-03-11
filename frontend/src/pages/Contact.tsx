import "./Contact.css";
import Button from "../components/Button";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

// Helper funkcija za formatiranje backend grešaka
const formatDRFErrors = (data: any): string => {
  if (!data) return "Unknown error";

  return Object.entries(data)
    .map(([field, errs]: [string, any]) => {
      if (Array.isArray(errs)) {
        return `${field}: ${errs.join(", ")}`;
      } else if (typeof errs === "string") {
        return `${field}: ${errs}`;
      } else if (typeof errs === "object") {
        return `${field}: ${JSON.stringify(errs)}`;
      } else {
        return `${field}: ${errs}`;
      }
    })
    .join("\n");
};

function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
    housing: false,
    office: false,
    commercial: false,
    online: false,
    press: false,
    recommendation: false,
    outdoor: false,
    print_ad: false,
    other: false,
  });

  // Ubacivanje automatske poruke iz state-a
  useEffect(() => {
    if (location.state?.message) {
      setFormData((prev) => ({
        ...prev,
        message: location.state.message,
      }));
    }
  }, [location.state]);

  // Handle change za inpute, textarea i checkbox-e
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: `${formData.firstname} ${formData.lastname}`,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      agree: formData.agree,
      housing: formData.housing,
      office: formData.office,
      commercial: formData.commercial,
      online: formData.online,
      press: formData.press,
      recommendation: formData.recommendation,
      outdoor: formData.outdoor,
      print_ad: formData.print_ad,
      other: formData.other,
    };

    try {
      await api.post("contact/", payload);
      alert("Inquiry sent successfully!");
    } catch (error: any) {
      console.log("FULL ERROR:", error);

      if (error.response && error.response.data) {
        const messages = formatDRFErrors(error.response.data);
        alert(`There was an error:\n${messages}`);
      } else {
        alert("Something went wrong.");
      }
    }
  };

  return (
    <div className="inquiry">
      <h1>Inquiry</h1>

      <div className="container">
        {/* Email me about */}
        <p>EMAIL ME INFORMATION ON THE TOPICS:</p>
        <div className="checkbox-group">
          {["housing", "office", "commercial"].map((field) => (
            <label key={field}>
              <input
                type="checkbox"
                name={field}
                checked={(formData as any)[field]}
                onChange={handleChange}
              />
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
          ))}
        </div>

        {/* Forma */}
        <form onSubmit={handleSubmit}>
          <div className="inputi">
            <input
              type="text"
              name="firstname"
              placeholder="First Name*"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name*"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Telephone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message...*"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <p>How did You find out about us?</p>
          <div className="socialsq">
            {[
              "print_ad",
              "online",
              "outdoor",
              "recommendation",
              "press",
              "other",
            ].map((field) => (
              <label key={field}>
                <input
                  type="checkbox"
                  name={field}
                  checked={(formData as any)[field]}
                  onChange={handleChange}
                />
                {field.replace("_", " ")}
              </label>
            ))}
          </div>

          {/* JEDINI OBAVEZAN CHECKBOX */}
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <strong>
              By submitting your request, you agree to the processing of your
              data. *
            </strong>
          </label>

          <br />
          {/* OVO JE VAŽNO: type="submit" */}
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
