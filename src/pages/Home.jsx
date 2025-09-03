import { Users, Video, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-12 pb-12"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Transform Your Mind & Body with{" "}
            <span className="text-pink-600">Yoga</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Whether you’re male or female, beginner or advanced, our yoga
            sessions are designed for everyone. Join live classes and structured
            courses with expert teachers to achieve balance, strength, and
            mindfulness.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="/classes">
              <button className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow hover:bg-pink-700 transition">
                Join a Class
              </button>
            </a>
            <a href="/courses">
              <button className="px-6 py-3 border border-pink-600 text-pink-600 rounded-xl hover:bg-pink-50 transition">
                Explore Courses
              </button>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20231221/pngtree-sports-and-fitness-girls-practicing-yoga-in-the-yoga-room-in-photo-image_15542618.png"
            alt="Yoga Group Session"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="classes" className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose Us?
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <Video className="w-10 h-10 text-pink-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-pink-600">
                Live Classes
              </h4>
              <p className="text-gray-600">
                Interactive sessions with real-time guidance from expert
                instructors.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <Users className="w-10 h-10 text-pink-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-pink-600">
                Structured Courses
              </h4>
              <p className="text-gray-600">
                Step-by-step programs tailored for beginners to advanced
                learners.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <Calendar className="w-10 h-10 text-pink-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-pink-600">
                Flexible Schedule
              </h4>
              <p className="text-gray-600">
                Practice anytime, anywhere with recorded sessions and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Start Your Yoga Journey Today
        </h3>
        <p className="mb-8 max-w-2xl mx-auto">
          Sign up for our live classes or enroll in courses designed to bring
          balance and energy to your life.
        </p>
        <a href="#courses">
          <button className="px-8 py-4 bg-white text-pink-600 rounded-2xl shadow-lg hover:bg-gray-100 transition">
            Get Started
          </button>
        </a>
      </section>
    </div>
  );
}
