"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 27.7172, 
  lng: 85.3240,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message Sent Successfully!");
  };

  return (
    <div className="bg-white">
        <div className="max-w-6xl mx-auto p-6">
            <div id="mapSection">
                <LoadScript googleMapsApiKey="AIzaSyAzYqqfho8EdU7KDBfRIjnAbWUaB8zOPBQ">
                    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
                    <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-0 lg:grid-cols-3 gap-5 xl:gap-10 my-10 text-gray-800">
            <div className="p-6 border shadow-md rounded-lg bg-[#375bc7] text-white">
            <h3 className="text-lg font-semibold flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Address
            </h3>
            <p>Kathmandu, Nepal</p>
            </div>
            <div className="p-6 border shadow-md rounded-lg bg-[#1b2565] text-white">
            <h3 className="text-lg font-semibold flex items-center">
                <FaPhoneAlt className="mr-2" /> Contact Details
            </h3>
            <p>Phone: 1234567890</p>
            </div>
            <div className="p-6 border shadow-md rounded-lg bg-[#6dc5f1] text-white">
            <h3 className="text-lg font-semibold flex items-center">
                <FaEnvelope className="mr-2" /> Emails
            </h3>
            <p>booking@healthcarepro.com</p>
            <p>contact@healthcarepro.com</p>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-4 text-[#1b2565]">Send Us a Message</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
                type="text" 
                name="firstName" 
                placeholder="First Name" 
                required 
                className="p-3 border rounded-lg w-full focus:ring-[#375bc7] focus:border-[#375bc7] text-black bg-white"
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="lastName" 
                placeholder="Last Name" 
                required 
                className="p-3 border rounded-lg w-full focus:ring-[#375bc7] focus:border-[#375bc7] text-black bg-white"
                onChange={handleChange} 
            />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input 
                type="text" 
                name="phone" 
                placeholder="Phone Number (Optional)" 
                className="p-3 border rounded-lg w-full focus:ring-[#375bc7] focus:border-[#375bc7] text-black bg-white"
                onChange={handleChange} 
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                className="p-3 border rounded-lg w-full focus:ring-[#375bc7] focus:border-[#375bc7] text-black bg-white"
                onChange={handleChange} 
            />
            </div>
            <textarea 
            name="message" 
            rows="4" 
            placeholder="Your Message" 
            required
            className="p-3 border rounded-lg w-full mt-4 focus:ring-[#375bc7] focus:border-[#375bc7] text-black bg-white"
            onChange={handleChange}
            ></textarea>

            <button 
            type="submit" 
            className="w-full bg-[#375bc7] text-white py-3 rounded-lg hover:bg-[#1b2565]"
            >
            Send Message
            </button>
        </form>
        </div>
    </div>
  );
}
