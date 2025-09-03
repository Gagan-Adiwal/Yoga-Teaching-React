export default function About() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Learn more about our mission, vision, and the journey of YogaFlow.
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://media.istockphoto.com/id/1269745311/photo/meditation-in-nature-at-sunset.jpg?s=612x612&w=0&k=20&c=W9E5cRgFj9pKLimVTGph8-RdQ5UAHMQzOxSnytmcD4U="
            alt="Yoga Studio"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 mb-6">
            YogaFlow was founded with a mission to make yoga accessible to
            everyone, regardless of age, gender, or experience level. Our
            passionate instructors and carefully designed programs empower you
            to achieve balance, mindfulness, and wellness.
          </p>
          <p className="text-gray-600 mb-6">
            From live interactive sessions to structured online courses, we
            provide flexible options to fit your lifestyle. We believe yoga is
            not just a practice—it’s a journey of self-discovery and growth.
          </p>
          <button className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow hover:bg-pink-700 transition">
            Join Our Community
          </button>
        </div>
      </section>
    </div>
  );
}
