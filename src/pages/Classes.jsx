import { Clock, Dumbbell, HeartPulse } from "lucide-react";

export default function Classes() {
  const classes = [
    {
      id: 1,
      title: "Morning Flow Yoga",
      description:
        "Start your day with energy and focus through a refreshing morning flow.",
      time: "7:00 AM - 8:00 AM",
      level: "Beginner",
      icon: <HeartPulse className="w-6 h-6 text-pink-600" />,
      image:
        "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Power Yoga",
      description:
        "High-energy yoga session to build strength, flexibility, and endurance.",
      time: "6:00 PM - 7:00 PM",
      level: "Intermediate",
      icon: <Dumbbell className="w-6 h-6 text-pink-600" />,
      image:
        "https://t3.ftcdn.net/jpg/03/27/38/44/360_F_327384402_NzqnEUPS2qjwBzs7imQZPN9wRd4B6c4K.jpg",
    },
    {
      id: 3,
      title: "Relax & Restore",
      description:
        "Unwind with calming poses, breathing techniques, and mindfulness.",
      time: "8:00 PM - 9:00 PM",
      level: "All Levels",
      icon: <Clock className="w-6 h-6 text-pink-600" />,
      image:
        "https://www.shutterstock.com/shutterstock/videos/1092965467/thumb/1.jpg?ip=x480",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join Our Live Yoga Classes
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Practice in real-time with expert instructors. Flexible schedules for
          all levels — beginner to advanced.
        </p>
      </section>

      {/* Classes Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Available Classes
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => (
            <div
              key={cls.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <img
                src={cls.image}
                alt={cls.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">{cls.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {cls.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">{cls.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{cls.time}</span>
                  <span className="font-medium">{cls.level}</span>
                </div>
                <button className="w-full py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Join a Live Class?
        </h3>
        <p className="mb-8 max-w-2xl mx-auto">
          Sign up today and experience the benefits of practicing yoga with
          expert teachers in real time.
        </p>
        <button className="px-8 py-4 bg-white text-pink-600 rounded-2xl shadow-lg hover:bg-gray-100 transition">
          Join Now
        </button>
      </section>
    </div>
  );
}
