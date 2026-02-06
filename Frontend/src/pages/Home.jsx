import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-100">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m Shubham 👋
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
          Full Stack Developer (MERN) building scalable and user-friendly web
          applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-lg">
            View Projects
          </button>

          <button className="w-full sm:w-auto px-6 py-3 border border-black rounded-lg">
            Contact Me
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
