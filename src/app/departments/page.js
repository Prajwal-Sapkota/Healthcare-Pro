import Link from "next/link"; 

export default function Departments() {
  const departments = [
    { name: "Cardiology", link: "/departments/cardiology" },
    { name: "Neurology", link: "/departments/neurology" },
    { name: "Orthopedics", link: "/departments/orthopedics" },
    { name: "Pediatrics", link: "/departments/pediatrics" },
    { name: "Dermatology", link: "/departments/dermatology" },
    { name: "Oncology", link: "/departments/oncology" },
  ];

  return (
    <div className="bg-white">
        <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Departments</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
            <Link key={index} href={dept.link}>
                <div className="p-4 border rounded-lg shadow-md bg-gray-200 text-center text-gray-900 hover:bg-blue-500 hover:text-white ">
                <h2 className="text-xl font-semibold">{dept.name}</h2>
                </div>
            </Link>
            ))}
        </div>
        </div>
    </div>
  );
}
