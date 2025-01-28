export default function BoxesInfo() {
  const boxes = [
    {
      title: 'Emergency Case',
      description: 'If you need a doctor urgently outside of opening hours, call emergency appointments.',
      button: 'Read More',
      color: "bg-blue-500", 
    },
    {
      title: 'Doctors Timetable',
      description: 'View services and current timetable for our doctors.',
      button: 'Read More',
      color: "bg-blue-900", 
    },
    {
      title: 'Opening Hours',
      description: [
        'Monday-Thursday: 8.00-17.00',
        'Friday: 9.00-18.00',
        'Saturday: 9.30-17.30',
      ],
      button: '',
      color: "bg-blue-400", 
    },
  ];

  return (
    <section className="container mx-auto py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`${box.color} text-white p-6 rounded shadow-md`}
          >
            <h3 className="text-xl font-bold mb-2">{box.title}</h3>
            {Array.isArray(box.description) ? (
              <div>
                {box.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ) : (
              <p>{box.description}</p>
            )}
            {box.button && (
              <button className="mt-4 px-4 py-2 bg-white text-blue-800 rounded hover:bg-blue-100">
                {box.button}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
