import { PlayCircle, Clock, Users } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Beginner Yoga Flow",
      description:
        "Perfect for newcomers. Learn foundational poses, breathing techniques, and gentle flows.",
      duration: "4 Weeks",
      students: "200+",
      image:
        "https://thumbs.dreamstime.com/b/woman-yoga-relax-nature-lake-60434685.jpg",
    },
    {
      id: 2,
      title: "Power Yoga Challenge",
      description:
        "Boost strength, stamina, and flexibility with high-energy yoga sequences.",
      duration: "6 Weeks",
      students: "150+",
      image:
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Mindful Meditation & Yoga",
      description:
        "Calm your mind and body with guided meditation and restorative yoga.",
      duration: "3 Weeks",
      students: "300+",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Explore Our Yoga Courses
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          From beginner flows to advanced practices, find the right course for
          your journey.
        </p>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Popular Courses
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-pink-600" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-pink-600" /> {course.students}
                  </span>
                </div>
                <button className="w-full py-3 flex items-center justify-center gap-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition">
                  <PlayCircle className="w-5 h-5" /> Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Begin Your Yoga Journey?
        </h3>
        <p className="mb-8 max-w-2xl mx-auto">
          Join thousands of students who are transforming their lives through
          yoga and mindfulness.
        </p>
        <button className="px-8 py-4 bg-white text-pink-600 rounded-2xl shadow-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}
