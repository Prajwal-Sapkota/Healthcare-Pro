import Link from "next/link";

export function Contact() {
  return (
    <section className="bg-[#fcfff9]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col h-full">
            <h3 className="text-red-700 text-2xl sm:text-3xl font-bold mb-4">In Case of Emergency Call</h3>
            <p className="text-[#375bc7] text-xl sm:text-2xl mb-4">1234567890</p>
            <p className="text-gray-600 mb-6">Please remember we care about your privacy.</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#375bc7] text-white rounded-md hover:bg-[#6dc5f1] transition-colors"
            >
              OR SEND US A MESSAGE →
            </Link>
          </div>
          <div className="relative rounded-lg overflow-hidden flex flex-col h-full">
            <img
              src="/images/map.jpeg"
              alt="Location"
              className="object-cover w-full h-64 sm:h-80 md:h-[400px]" // Set a max height for larger screens
            />
            <div className="absolute inset-0 bg-[#1b2565]/80 p-8 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Kathmandu</h3>
              <p className="mb-6 text-lg sm:text-xl">Nepal</p>
              <p className="mb-8 text-base sm:text-lg">Check duty hours of doctors in our timetable.</p>
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-[#1b2565] transition-colors"
              >
                GO TO TIMETABLE →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
