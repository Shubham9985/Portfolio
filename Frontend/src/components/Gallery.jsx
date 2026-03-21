import { useState } from "react";

const images = [
  "/projects/gal1.jpeg",
  "/projects/gal2.jpg",
  "/projects/gal5.png",
  "/projects/gal6.png",
  "/projects/gal3.jpg",
  "/projects/gal4.jpeg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="w-full px-6 sm:px-10 py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          Gallery
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(src)}
              className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm 
                         hover:shadow-md transition duration-300"
            >
              <img
                src={src}
                alt="gallery"
                loading="lazy"
                className="w-full h-40 sm:h-44 md:h-48 object-cover 
                           transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* MODAL / PREVIEW */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 text-white text-2xl z-50"
              >
                ✕
              </button>

              {/* IMAGE */}
              <img
                src={selectedImage}
                alt="preview"
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;