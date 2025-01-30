export function Value() {
  const services = [
    {
      title: "HEALTHCARE CENTER",
      description: "Our goal is to provide a patient-centered medical home for all patients",
      image: "/images/healthcare.jpg",
    },
    {
      title: "IMMEDIATE CARE",
      description: "Effective and affordable treatment for non-life threatening illnesses",
      image: "/images/immediatecare.jpg",
    },
    {
      title: "DIAGNOSTIC CENTER",
      description: "Offers a wide array of reliable lab and diagnostic imaging services",
      image: "/images/diagnostic.jpg",
    },
  ];

  return (
    <section className="py-16 bg-[#fcfff9]">
      <div className="container mx-auto px-4 max-w-7xl lg:max-w-4xl">
        <div className="max-w-3xl mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#1b2565]">We Value Your Family's Health and Your Time</h2>
          <p className="text-[#375bc7] text-lg">
            Welcome to Health Care Pro, a full-service diagnostic center and medical care clinic located on the north side of
            Chicago in the historic neighborhood. We provide fast, effective, and affordable treatment for non-life
            threatening illnesses and injuries that need attention right away by certified specialists.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:border-[#375bc7]"
            >
              <div className="relative h-36 mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-110"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-[#1b2565] mb-2">{service.title}</h3>
                <p className="text-[#375bc7] text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
