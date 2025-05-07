import React from "react";
import Layout from "../../components/layout/Layout";
import { Mail, Phone, MapPin, User, MessageSquare, Tag } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-[#161616] min-h-screen px-4 py-16 sm:px-6 lg:px-8 text-white font-sans animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Glowing Header */}
          <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-gray-300 via-white to-gray-300 text-transparent bg-clip-text drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="text-center text-gray-400 mb-12">
            We'd love to hear from you. Fill out the form below and we'll get
            back to you.
          </p>

          {/* Form Container */}
          <form
            action="#"
            method="POST"
            className="bg-[#1f1f1f] border border-[#353535] shadow-xl rounded-3xl p-8 space-y-8"
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm text-gray-400 mb-1"
                >
                  <User size={16} /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 bg-[#161616] text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm text-gray-400 mb-1"
                >
                  <Mail size={16} /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 bg-[#161616] text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="flex items-center gap-2 text-sm text-gray-400 mb-1"
              >
                <Tag size={16} /> Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full p-3 bg-[#161616] text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-sm text-gray-400 mb-1"
              >
                <MessageSquare size={16} /> Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full p-3 bg-[#161616] text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-400 hover:bg-gray-500 text-black font-semibold py-3 px-6 rounded-xl transition duration-200 shadow-md"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-14 text-center text-gray-400 space-y-2">
            <p className="flex items-center justify-center gap-2">
              <Mail size={16} /> support@OnlyBlack.com
            </p>
            <p className="flex items-center justify-center gap-2">
              <Phone size={16} /> +880 1234 567890
            </p>
            <p className="flex items-center justify-center gap-2">
              <MapPin size={16} /> Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
