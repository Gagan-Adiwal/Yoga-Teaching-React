import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Have questions? Reach out to us anytime. We’re here to help you on
          your yoga journey.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            We’d love to hear from you! Whether it’s about classes, courses, or
            collaborations, connect with us.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700">
              <Mail className="w-6 h-6 text-pink-600" /> support@yogaflow.com
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <Phone className="w-6 h-6 text-pink-600" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <MapPin className="w-6 h-6 text-pink-600" /> 123 Yoga Street,
              Wellness City
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send us a message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
            <button className="w-full py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
