export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold text-white mb-4">YogaFlow</h4>
          <p>Empowering lives with yoga, mindfulness, and balance.</p>
        </div>

        <div>
          <h5 className="font-semibold text-white mb-3">Quick Links</h5>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/classes" className="hover:text-white">Classes</a></li>
            <li><a href="/courses" className="hover:text-white">Courses</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-white mb-3">Stay Connected</h5>
          <p>Subscribe for updates and offers.</p>
          <form className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-xl w-full text-gray-900"
            />
            <button className="bg-pink-600 px-4 rounded-r-xl hover:bg-pink-700">
              Go
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        © {new Date().getFullYear()} YogaFlow. All rights reserved.
      </div>
    </footer>
  );
}
