export const Team = () => {
    const teamMembers = [
        {
            name: "Dr. Sophia Williams",
            role: "Cardiologist",
            image: "/images/team1.jpeg", 
        },
        {
            name: "Dr. Alexander Johnson",
            role: "Orthopedic Surgeon",
            image: "/images/team2.jpeg", 
        },
        {
            name: "Dr. Emily Davis",
            role: "Neurologist",
            image: "/images/team3.jpeg", 
        }
    ];
  
    return (
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet the Team</h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            We are extremely proud of our staff. All our team members work together
            to help our patients recover and provide the best care possible.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md text-center space-y-4"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className=" w-30 h-28 mx-auto"
                />
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  