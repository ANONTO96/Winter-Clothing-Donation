
const HowToHelp = () => {
    return (
        <div>
    <section className="bg-gray-100 py-16 min-h-screen">
      <div className="container mt-4 mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-l from-sky-500 to-purple-500 text-white rounded-3xl w-64 mx-auto mb-8 pb-1 cursor-pointer">
          How to Help
        </h2>
        <p className="text-center text-lg text-gray-700 mb-12">
          Join us in spreading warmth this winter. Follow these simple steps to make a difference!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="card bg-white shadow-lg hover:shadow-xl transition rounded-lg p-6 cursor-pointer">
            <div className="flex items-center justify-center h-16 w-16 bg-blue-200 text-sky-600 rounded-full mx-auto">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-center mt-4 text-gray-800">
              Gather Donations
            </h3>
            <p className="text-center text-gray-600 mt-2">
              Collect gently used winter clothing such as jackets, scarves, gloves, and hats.
            </p>
          </div>
          {/* Step 2 */}
          <div className="card bg-white shadow-lg hover:shadow-xl transition rounded-lg p-6 cursor-pointer">
            <div className="flex items-center justify-center h-16 w-16 bg-blue-200 text-sky-600 rounded-full mx-auto">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-center mt-4 text-gray-800">
              Find a Drop-off Point
            </h3>
            <p className="text-center text-gray-600 mt-2">
              Use our location finder to discover nearby donation centers or partner organizations.
            </p>
          </div>
          {/* Step 3 */}
          <div className="card bg-white shadow-lg hover:shadow-xl transition rounded-lg p-6 cursor-pointer">
            <div className="flex items-center justify-center h-16 w-16 bg-blue-200 text-sky-600 rounded-full mx-auto">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-center mt-4 text-gray-800">
              Spread the Word
            </h3>
            <p className="text-center text-gray-600 mt-2">
              Share our initiative with your friends and family to maximize impact.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="btn bg-sky-400 hover:bg-sky-500 px-8 py-3 text-white rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
        </div>
    );
};

export default HowToHelp;