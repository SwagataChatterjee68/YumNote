// ContactPage.jsx

import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="min-h-screen  flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-3 overflow-hidden">
        
        {/* Contact Information Card */}
        <div className="bg-orange-400 text-white p-8 flex flex-col justify-center space-y-4 md:col-span-1">
          <h3 className="text-2xl font-bold">Contact Information</h3>
          <p>We would love to hear from you. Feel free to reach out anytime!</p>
          <div className="space-y-2 text-sm">
            <p>📞 +91 9876543210</p>
            <p>📞 +91 9123456789</p>
            <p>✉️ support@YumNote.com</p>
            <p>📍 Kolkata, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 md:col-span-2 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-2 text-center md:text-left">Get In Touch</h3>
          <p className="text-gray-600 mb-6 text-center md:text-left max-w-xl">
            Have questions, suggestions, or want to collaborate? Fill out the form below and we'll get back to you soon!
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm mb-1 font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="border-b-2 border-gray-300 focus:border-orange-500 focus:outline-none py-2 px-1 bg-transparent"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm mb-1 font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="border-b-2 border-gray-300 focus:border-orange-500 focus:outline-none py-2 px-1 bg-transparent"
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="subject" className="text-sm mb-1 font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Your Subject"
                className="border-b-2 border-gray-300 focus:border-orange-500 focus:outline-none py-2 px-1 bg-transparent"
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="message" className="text-sm mb-1 font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here..."
                className="border-b-2 border-gray-300 focus:border-orange-500 focus:outline-none py-2 px-1 bg-transparent resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-center md:justify-start mt-4">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
