import React, { useState } from "react";

const Login = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Popup Trigger Button */}
      <button onClick={openPopup} className="bg-blue-500 text-white p-2 mb-4">
        Open Popup
      </button>

      {/* Popup Container */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          {/* Popup Content */}
          <div className="bg-white p-8 rounded shadow-lg">
            <div class="container mx-auto p-4">
              <h1 class="text-2xl font-bold mb-4">Sign in</h1>
              <form action="#" method="post" class="max-w-md mx-auto">
                <div class="mb-4">
                  <label
                    for="name"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    class="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    class="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="message"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your message here"
                    class="w-full p-2 border border-gray-300 rounded"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Login
                </button>
                <button
                  type="submit"
                  class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Create New Account
                </button>
              </form>
            </div>
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="mt-4 bg-red-500 text-white p-2"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Your other content goes here */}
    </div>
  );
};

export default Login;
