const items = [
  "Deepening my understanding of scalable backend architecture",
  "Exploring system design fundamentals",
  "Building full-stack products from idea to deployment",
  "Refining performance and clean code practices"
];

const CurrentlyBuilding = () => {
  return (
    <section className="w-full px-4 sm:px-8 py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-2xl sm:text-3xl font-semibold text-black">
          Currently Building
        </h2>

        <div className="mt-10 space-y-6">
          {items.map((item, index) => (
            <p
              key={index}
              className="text-gray-600 leading-relaxed"
            >
              {item}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CurrentlyBuilding;