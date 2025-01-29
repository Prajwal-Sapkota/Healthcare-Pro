export default function Pages() {
    return (
        <div className="bg-white">
            <div className="bg-white max-w-6xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">Our Services</h1>
                <ul className=" space-y-4 text-gray-800">
                <li className=" p-4 border rounded-lg shadow-md bg-gray-200 hover:bg-blue-500 hover:text-white">
                    <h2 className="text-xl font-semibold">General Checkup</h2>
                    <p className="text-gray-600">Comprehensive health checkups for all age groups.</p>
                </li>
                <li className="p-4 border rounded-lg shadow-md bg-gray-200 hover:bg-blue-500 hover:text-white ">
                    <h2 className="text-xl  font-semibold">Emergency Services</h2>
                    <p className="text-gray-600">24/7 medical assistance and urgent care.</p>
                </li>
                <li className="p-4 border rounded-lg shadow-md bg-gray-200 hover:bg-blue-500 hover:text-white ">
                    <h2 className="text-xl font-semibold">Pediatric Care</h2>
                    <p className="text-gray-600">Specialized healthcare services for children.</p>
                </li>
                </ul>
            </div>
        </div>
    );
  }
  