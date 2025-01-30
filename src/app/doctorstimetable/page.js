"use client";
import Link from "next/link";

export default function DoctorsTimetable() {
  return (
    <div className="min-h-screen bg-[#fcfff9] text-[#1b2565] p-6 sm:p-12 lg:p-16 flex justify-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-6">
          Doctors Timetable
        </h1>
        <p className="text-lg sm:text-xl text-center mb-6">
          View services and the current timetable for our doctors.
        </p>

        <div className="bg-white shadow-lg rounded-xl p-4 sm:p-8 lg:p-10 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-[#1b2565] text-white">
                <th className="border border-gray-300 p-3">Doctor</th>
                <th className="border border-gray-300 p-3">Specialization</th>
                <th className="border border-gray-300 p-3">Available Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-[#f0f4ff]">
                <td className="border border-gray-300 p-3">Dr. John Doe</td>
                <td className="border border-gray-300 p-3">Cardiologist</td>
                <td className="border border-gray-300 p-3">
                  Mon - Fri (9:00 AM - 4:00 PM)
                </td>
              </tr>
              <tr className="even:bg-[#f0f4ff]">
                <td className="border border-gray-300 p-3">Dr. Jane Smith</td>
                <td className="border border-gray-300 p-3">Neurologist</td>
                <td className="border border-gray-300 p-3">
                  Tue - Sat (10:00 AM - 5:00 PM)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/">
            <button className="px-6 py-3 bg-[#375bc7] text-white rounded-md hover:bg-[#6dc5f1] transition duration-300 text-lg sm:text-xl">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
