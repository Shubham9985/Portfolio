const images = [
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/400",
];

const Gallery = () => {
  return (
    <section id="gallery" className="w-full px-6 sm:px-10 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-gray-100"
            >
              <img
                src={src}
                alt="gallery"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;