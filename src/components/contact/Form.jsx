import React from "react";

const Form = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 flex flex-col md:flex-row bg-transparent rounded-3xl overflow-hidden">
      {/* Form Section */}
      <div
        className="flex-1 bg-[#181210]  p-8 md:p-12 flex flex-col justify-center relative"
        style={{
          background:
            "radial-gradient(ellipse at top, #2d1808 0%, #181210 80%)",
        }}
      >
        <h2 className="text-2xl font-semibold text-white mb-6">
          Free Consultation
        </h2>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name *"
              className="flex-1 px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              className="flex-1 px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email *"
              className="flex-1 px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
              required
            />
            <input
              type="text"
              placeholder="Subject *"
              className="flex-1 px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
              required
            />
          </div>
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full mt-2 transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
      {/* Image Section */}
      <div className="flex-1 min-h-[350px] bg-gray-200">
        <img
          src="/spacebg.jpg"
          alt="Consultation"
          className="w-full h-full object-cover object-center rounded-none md:rounded-r-3xl"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Form;
