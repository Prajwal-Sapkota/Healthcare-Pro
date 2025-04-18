"use client";
import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import axios from "axios";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 27.720916,
  lng: 85.371228,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [captchaToken, setCaptchaToken] = useState("");
  // const captchaRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAzYqqfho8EdU7KDBfRIjnAbWUaB8zOPBQ", 
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaVerify = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // if (!captchaToken) {
    //   setError("Please verify the CAPTCHA.");
    //   setLoading(false);
    //   return;
    // }

    const formDataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "Not Provided",
      message: formData.message,
    };

    try {
      const response = await axios.post('/api/contact', formDataToSend);

      if (response.status === 200) {
        alert("Message Sent Successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
        // setCaptchaToken("");
        // captchaRef.current.resetCaptcha();
      } else {
        setError("Something went wrong.");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
        {/* Map */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
            <Marker
              position={center}
              label={{
                text: "Aarogya",
                color: "#6E260E",
                fontSize: "16px",
                fontWeight: "900",
              }}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                labelOrigin: new window.google.maps.Point(15, -10),
              }}
              onClick={() => setShowInfo(true)}
            />
            {showInfo && (
              <InfoWindow position={center} onCloseClick={() => setShowInfo(false)}>
                <div>
                  <h3 className="font-semibold text-[#1b2565]">Aarogya Clinic</h3>
                  <p className="text-[#375bc7]">Jorpati, Kathmandu</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#1b2565]">Send Us a Message</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-3 border rounded-lg w-full"
            value={formData.name}
            onChange={handleChange}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone (Optional)"
              className="p-3 border rounded-lg w-full"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 border rounded-lg w-full"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="p-3 border rounded-lg w-full mt-4 text-black"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {/* CAPTCHA */}
          {/* <div className="mt-4">
            <HCaptcha
              sitekey="8a64833c-889a-4a76-a686-a69ee7644f8a" 
              ref={captchaRef}
            />
          </div> */}

          <button
            type="submit"
            className="w-full bg-[#375bc7] text-white py-3 rounded-lg hover:bg-[#1b2565] mt-4"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
