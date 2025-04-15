import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Topbar() {
    const handleNavigation = (path) => {
        router.push(path);
  };

  return (
    <div className="bg-[#fcfff9] text-[#1b2565] border-b border-[#6dc5f1]">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>Jorpati, Kathmandu, Nepal</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>+977-9808181796</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>aarogyaskinclinic@gmail.com</span>
          </div>
        </div>

        <div className="flex space-x-4 text-sm">
          <button onClick={() => handleNavigation("https://facebook.com")} className="text-[#1b2565] hover:text-[#375bc7]">
            <FiFacebook />
          </button>
          <button onClick={() => handleNavigation("https://twitter.com")} className="text-[#1b2565] hover:text-[#6dc5f1]">
            <FiTwitter />
          </button>
          <button onClick={() => handleNavigation("https://youtube.com")} className="text-[#1b2565] hover:text-red-600">
            <FiYoutube />
          </button>
        </div>
      </div>
    </div>
  );
}
