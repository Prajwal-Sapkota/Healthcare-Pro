"use client";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; 
import axios from "axios";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 27.720916, // Aarogya Clinic, Jorpati, Kathmandu
  lng: 85.371228
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
  const [showInfo, setShowInfo] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAzYqqfho8EdU7KDBfRIjnAbWUaB8zOPBQ", 
  })

  if (!isLoaded) return <div>Loading Map...</div>

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const bdata = {
      name: formData.name,
      email: formData.email,
      description: formData.message,
      type: "General",
    };

    try {
      const response = await axios.post("https://school.samyamd.com.np/api/v1/contact", bdata, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        alert("Message Sent Successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto p-6">
        <div id="mapSection">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
              <Marker position={center}  label={{
                text: "Aarogya",
                color: "#6E260E",
                fontSize: "16px",
                fontWeight: "900",
              }}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                labelOrigin: new window.google.maps.Point(15, -10),
              }} onClick={() => setShowInfo(true)} />
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 xl:gap-10 my-10 text-gray-800">
          <div className="p-6 border shadow-md rounded-lg bg-[#375bc7] text-white">
            <h3 className="text-lg font-semibold flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Address
            </h3>
            <p>Jorpati, Kathmandu, Nepal</p>
          </div>
          <div className="p-6 border shadow-md rounded-lg bg-[#1b2565] text-white">
            <h3 className="text-lg font-semibold flex items-center">
              <FaPhoneAlt className="mr-2" /> Contact Details
            </h3>
            <p>Phone: +977-9808181796</p>
          </div>
          <div className="p-6 border shadow-md rounded-lg bg-[#6dc5f1] text-white">
            <h3 className="text-lg font-semibold flex items-center">
              <FaEnvelope className="mr-2" /> Emails
            </h3>
            <p>aarogyaskinclinic@gmail.com</p>
           
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#1b2565]">Send Us a Message</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="grid grid-cols-1 gap-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              required 
              className="p-3 border rounded-lg w-full focus:ring-[#375bc7] focus:border-[#375bc7] text-black bg-white"
              value={formData.name}
              onChange={handleChange} 
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input 
              type="text" 
              name="phone" 
              placeholder="Phone Number (Optional)" 
              className="p-3 border rounded-lg w-full focus:ring-[#375bc7] focus:border-[#375bc7] text-black bg-white"
              value={formData.phone}
              onChange={handleChange} 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              className="p-3 border rounded-lg w-full focus:ring-[#375bc7] focus:border-[#375bc7] text-black bg-white"
              value={formData.email}
              onChange={handleChange} 
            />
          </div>
          <textarea 
            name="message" 
            rows="4" 
            placeholder="Your Message" 
            required
            className="p-3 border rounded-lg w-full mt-4 focus:ring-[#375bc7] focus:border-[#375bc7] text-black bg-white"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

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
