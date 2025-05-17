import React from "react";

const ContactInfo = () => {
  return (
    <div
      className="w-full bg-[#181210] pt-14 pb-6 px-4 text-white relative"
      style={{
        background: "radial-gradient(ellipse at top, #2d1808 0%, #181210 80%)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-8">
        {/* Office Address */}
        <div className="flex-1 bg-black/40 rounded-2xl shadow p-0 flex flex-col items-center min-w-[300px] max-w-sm">
          <div
            className="flex flex-col items-center pt-6 pb-4 w-full rounded-t-2xl"
            style={{
              background:
                "linear-gradient(to bottom, #0000 70%, transparent 100%)",
            }}
          >
            <div className="bg-[#181210] rounded-xl p-3 mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="white"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-6-5.686-6-10A6 6 0 0 1 18 11c0 4.314-6 10-6 10Z" />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Branch 1</h3>
            <p className="text-white mb-2 text-center">
              New belly road, Phulpur, Mymensingh
            </p>
          </div>
          <div className="border-t w-full px-6 py-6 text-center text-white text-base rounded-b-2xl">
            We’re passionate about helping businesses succeed in the digital
            space.
          </div>
        </div>
        {/* 24/7 Customer Support */}
        <div className="flex-1 bg-black/40 rounded-2xl shadow p-0 flex flex-col items-center min-w-[300px] max-w-sm">
          <div
            className="flex flex-col items-center pt-6 pb-4 w-full rounded-t-2xl"
            style={{
              background:
                "linear-gradient(to bottom, #0000 70%, transparent 100%)",
            }}
          >
            <div className="bg-orange-500 rounded-xl p-3 mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="white"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 22c4.418 0 8-3.582 8-8V8a8 8 0 1 0-16 0v6c0 4.418 3.582 8 8 8Z" />
                <path d="M8 15a4 4 0 0 0 8 0" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              24/7 Customer Support
            </h3>
            <p className="text-white mb-2 text-center">
              +8809638421042 , Contact@pouchcare.com
            </p>
          </div>
          <div className="border-t w-full px-6 py-6 text-center text-white text-base rounded-b-2xl">
            We’re passionate about helping businesses succeed in the digital
            space.
          </div>
        </div>
        {/* Business Hours */}
        <div className="flex-1 bg-black/40 rounded-2xl shadow p-0 flex flex-col items-center min-w-[300px] max-w-sm">
          <div
            className="flex flex-col items-center pt-6 pb-4 w-full rounded-t-2xl"
            style={{
              background:
                "linear-gradient(to bottom, #0000 70%, transparent 100%)",
            }}
          >
            <div className="bg-[#181210] rounded-xl p-3 mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="white"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-6-5.686-6-10A6 6 0 0 1 18 11c0 4.314-6 10-6 10Z" />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Branch 2</h3>
            <p className="text-white mb-2 text-center">
              Green road, Phulpur, Mymensingh
            </p>
          </div>
          <div className="border-t w-full px-6 py-6 text-center text-white text-base rounded-b-2xl">
            We’re passionate about helping businesses succeed in the digital
            space.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
