import Link from "next/link";

export function Contact() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-red-800 text-2xl font-bold mb-4">In Case of Emergency Call</h3>
            <p className="text-blue-600 text-xl mb-4">1234567890</p>
            <p className="text-gray-600 mb-6">Please remember we care about your privacy.</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              OR SEND US A MESSAGE →
            </Link>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/images/map.jpeg"
              alt="Location"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-900/80 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Kathmandu</h3>
              <p className="mb-6">CNepal</p>
              <p className="mb-8">Check duty hours of doctors in our timetable.</p>
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-blue-900 transition-colors"
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