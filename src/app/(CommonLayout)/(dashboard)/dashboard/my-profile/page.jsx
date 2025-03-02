// pages/profile.js
import Head from "next/head";
import React from "react";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>

      {/* Page Container */}
      <div className="min-h-screen bg-gray-50 p-4">
        {/* Top Bar */}
        <header className="flex justify-end mb-4">
          <p className="text-sm font-medium">
            Welcome! <span className="font-bold">Md Rimel</span>
          </p>
        </header>

        {/* Card / Form Container */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
          <h1 className="text-xl font-bold mb-6">Edit Your Profile</h1>

          <form className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-1 font-medium">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Md"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block mb-1 font-medium">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Rimel"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </div>

            {/* Email & Address Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="rimel1111@gmail.com"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="address" className="block mb-1 font-medium">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Kingston, 5236, United State"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </div>

            {/* Password Section */}
            <div>
              <h2 className="text-lg font-bold mb-3">Password Changes</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="currentPassword"
                    className="block mb-1 font-medium">
                    Current Password
                  </label>
                  <input
                    id="currentPassword"
                    type="password"
                    placeholder="Current Password"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="newPassword"
                    className="block mb-1 font-medium">
                    New Password
                  </label>
                  <input
                    id="newPassword"
                    type="password"
                    placeholder="New Password"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmNewPassword"
                    className="block mb-1 font-medium">
                    Confirm New Password
                  </label>
                  <input
                    id="confirmNewPassword"
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>
            </div>

            {/* Form Buttons */}
            <div className="flex justify-end space-x-4 pt-2">
              <button
                type="button"
                className="px-4 py-2 border border-red-500 text-red-500 rounded">
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-red-500 text-white rounded">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
